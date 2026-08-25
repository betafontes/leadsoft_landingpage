import Fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';
import multipart from '@fastify/multipart';
import rateLimit from '@fastify/rate-limit';

import { env } from './config/env.js';

import { RavenCandidateRepository } from './infrastructure/repositories/RavenCandidateRepository.js';
import { RavenCommentRepository } from './infrastructure/repositories/RavenCommentRepository.js';
import { RavenAdminRepository } from './infrastructure/repositories/RavenAdminRepository.js';

import { LoginUseCase } from './use-cases/LoginUseCase.js';
import { CreateCandidateUseCase } from './use-cases/CreateCandidateUseCase.js';
import { ListCandidatesUseCase } from './use-cases/ListCandidatesUseCase.js';
import { GetCandidateUseCase } from './use-cases/GetCandidateUseCase.js';
import { DeleteCandidateUseCase } from './use-cases/DeleteCandidateUseCase.js';
import { CreateCommentUseCase } from './use-cases/CreateCommentUseCase.js';
import { ListCommentsUseCase } from './use-cases/ListCommentsUseCase.js';
import { DeleteCommentUseCase } from './use-cases/DeleteCommentUseCase.js';
import { GetGalleryUseCase } from './use-cases/GetGalleryUseCase.js';
import { GetDashboardUseCase } from './use-cases/GetDashboardUseCase.js';

import { authRoutes } from './routes/authRoutes.js';
import { candidateRoutes } from './routes/candidateRoutes.js';
import { commentRoutes } from './routes/commentRoutes.js';
import { galleryRoutes } from './routes/galleryRoutes.js';
import { dashboardRoutes } from './routes/dashboardRoutes.js';

async function bootstrap() {
  const app = Fastify({
    logger: {
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
  });

  // ==========================================
  // PLUGINS
  // ==========================================

  await app.register(cors, {
    origin: env.CORS_ORIGIN,
    credentials: true,
  });

  await app.register(cookie);

  await app.register(multipart, {
    limits: {
      fileSize: env.MAX_FILE_SIZE_MB * 1024 * 1024,
    },
  });

  await app.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });

  // ==========================================
  // REPOSITORIES
  // ==========================================

  const candidateRepository = new RavenCandidateRepository();
  const commentRepository = new RavenCommentRepository();
  const adminRepository = new RavenAdminRepository();

  // ==========================================
  // USE CASES
  // ==========================================

  const loginUseCase = new LoginUseCase(adminRepository);
  const createCandidateUseCase = new CreateCandidateUseCase(candidateRepository);
  const listCandidatesUseCase = new ListCandidatesUseCase(candidateRepository);
  const getCandidateUseCase = new GetCandidateUseCase(candidateRepository);
  const deleteCandidateUseCase = new DeleteCandidateUseCase(candidateRepository);
  const createCommentUseCase = new CreateCommentUseCase(commentRepository, candidateRepository);
  const listCommentsUseCase = new ListCommentsUseCase(commentRepository);
  const deleteCommentUseCase = new DeleteCommentUseCase(commentRepository);
  const getGalleryUseCase = new GetGalleryUseCase(candidateRepository, commentRepository);
  const getDashboardUseCase = new GetDashboardUseCase(candidateRepository, commentRepository);

  // ==========================================
  // HEALTH CHECK
  // ==========================================

  app.get('/api/health', async () => {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  });

  // ==========================================
  // ROUTES
  // ==========================================

  authRoutes(app, loginUseCase, adminRepository);

  candidateRoutes(app, {
    createCandidateUseCase,
    listCandidatesUseCase,
    getCandidateUseCase,
    deleteCandidateUseCase,
    candidateRepository,
  });

  commentRoutes(app, {
    createCommentUseCase,
    listCommentsUseCase,
    deleteCommentUseCase,
  });

  galleryRoutes(app, {
    getGalleryUseCase,
  });

  dashboardRoutes(app, {
    getDashboardUseCase,
  });

  // ==========================================
  // ERROR HANDLER
  // ==========================================

  app.setErrorHandler((error, _request, reply) => {
    app.log.error(error);

    const statusCode =
      error instanceof Error && 'statusCode' in error
        ? Number((error as { statusCode?: number }).statusCode) || 500
        : 500;

    const message =
      env.NODE_ENV === 'production' ? 'Erro interno do servidor.' : error.message;

    return reply.status(statusCode).send({
      success: false,
      error: message,
    });
  });

  // ==========================================
  // START SERVER
  // ==========================================

  try {
    await app.listen({
      host: env.API_HOST,
      port: env.API_PORT,
    });

    console.log(`🚀 LeadSoft API running at http://${env.API_HOST}:${env.API_PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

bootstrap();
