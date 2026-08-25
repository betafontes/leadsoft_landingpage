import { FastifyInstance } from 'fastify';
import { CreateCandidateUseCase } from '../use-cases/CreateCandidateUseCase.js';
import { ListCandidatesUseCase } from '../use-cases/ListCandidatesUseCase.js';
import { GetCandidateUseCase } from '../use-cases/GetCandidateUseCase.js';
import { DeleteCandidateUseCase } from '../use-cases/DeleteCandidateUseCase.js';
import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

interface CandidateRoutesDependencies {
  createCandidateUseCase: CreateCandidateUseCase;
  listCandidatesUseCase: ListCandidatesUseCase;
  getCandidateUseCase: GetCandidateUseCase;
  deleteCandidateUseCase: DeleteCandidateUseCase;
  candidateRepository: ICandidateRepository;
}

export function candidateRoutes(app: FastifyInstance, deps: CandidateRoutesDependencies) {
  // Criar candidato (PUBLIC - com reCAPTCHA)
  app.post('/api/candidates', async (request, reply) => {
    try {
      const parts = request.parts();

      const fields: Record<string, string> = {};
      let imageBuffer: Buffer | null = null;
      let imageName = '';
      let imageMimeType = '';

      for await (const part of parts) {
        if (part.type === 'file') {
          imageBuffer = await part.toBuffer();
          imageName = part.filename;
          imageMimeType = part.mimetype;
        } else {
          fields[part.fieldname] = String(part.value);
        }
      }

      if (!imageBuffer) {
        return reply.status(400).send({
          success: false,
          error: 'Imagem é obrigatória.',
        });
      }

      const result = await deps.createCandidateUseCase.execute({
        name: fields.name,
        cpf: fields.cpf,
        email: fields.email,
        birthDate: fields.birthDate,
        caption: fields.caption,
        imageBuffer,
        imageName,
        imageMimeType,
        recaptchaToken: fields.recaptchaToken,
      });

      return reply.status(201).send({
        success: true,
        data: result,
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao cadastrar candidato.',
      });
    }
  });

  // Listar candidatos - ADMIN (protegido)
  app.get('/api/candidates', { preHandler: [authMiddleware] }, async (request, reply) => {
    try {
      const query = request.query as {
        page?: string;
        limit?: string;
        search?: string;
      };

      const page = Number(query.page || 1);
      const limit = Number(query.limit || 12);

      const result = await deps.listCandidatesUseCase.execute({
        page,
        limit,
        search: query.search,
      });

      return reply.send({
        success: true,
        data: result,
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro.',
      });
    }
  });

  // Buscar candidato - ADMIN (protegido)
  app.get('/api/candidates/:id', { preHandler: [authMiddleware] }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const result = await deps.getCandidateUseCase.execute(id);

      return reply.send({
        success: true,
        data: result,
      });
    } catch (error) {
      return reply.status(404).send({
        success: false,
        error: error instanceof Error ? error.message : 'Candidato não encontrado.',
      });
    }
  });

  // Imagem do candidato (PUBLIC)
  app.get('/api/candidates/:id/image', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const image = await deps.candidateRepository.getImage(id);

      if (!image) {
        return reply.status(404).send({
          success: false,
          error: 'Imagem não encontrada.',
        });
      }

      reply.header('Content-Type', image.contentType);
      reply.header('Cache-Control', 'public, max-age=86400');
      return reply.send(image.data);
    } catch {
      return reply.status(404).send({
        success: false,
        error: 'Imagem não encontrada.',
      });
    }
  });

  // Deletar candidato - ADMIN (protegido)
  app.delete('/api/candidates/:id', { preHandler: [authMiddleware] }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      await deps.deleteCandidateUseCase.execute(id);

      return reply.send({
        success: true,
        message: 'Candidato excluído.',
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao excluir.',
      });
    }
  });
}
