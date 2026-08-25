import { FastifyInstance } from 'fastify';
import { jwtVerify } from 'jose';
import { env } from '../config/env.js';
import { LoginUseCase } from '../use-cases/LoginUseCase.js';
import { IAdminRepository } from '../domain/ports/IAdminRepository.js';

export function authRoutes(app: FastifyInstance, loginUseCase: LoginUseCase, adminRepository: IAdminRepository) {
  app.post('/api/auth/login', async (request, reply) => {
    try {
      const { email, password } = request.body as {
        email: string;
        password: string;
      };

      const result = await loginUseCase.execute({ email, password });

      reply.setCookie('admin_token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 8, // 8 hours
      });

      return reply.send({
        success: true,
        data: result.admin,
      });
    } catch (error) {
      return reply.status(401).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao fazer login.',
      });
    }
  });

  app.post('/api/auth/logout', async (_request, reply) => {
    reply.clearCookie('admin_token', {
      path: '/',
    });

    return reply.send({
      success: true,
      message: 'Logout realizado com sucesso.',
    });
  });

  app.get('/api/auth/me', async (request, reply) => {
    const token = request.cookies.admin_token;

    if (!token) {
      return reply.status(401).send({
        success: false,
        error: 'Não autenticado.',
      });
    }

    try {
      const secret = new TextEncoder().encode(env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      const admin = await adminRepository.findById(payload.sub as string);

      if (!admin) {
        reply.clearCookie('admin_token', { path: '/' });
        return reply.status(401).send({
          success: false,
          error: 'Administrador não encontrado.',
        });
      }

      return reply.send({
        success: true,
        data: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
        },
      });
    } catch {
      reply.clearCookie('admin_token', { path: '/' });
      return reply.status(401).send({
        success: false,
        error: 'Token inválido ou expirado.',
      });
    }
  });
}
