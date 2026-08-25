import { FastifyInstance } from 'fastify';
import { CreateCommentUseCase } from '../use-cases/CreateCommentUseCase.js';
import { ListCommentsUseCase } from '../use-cases/ListCommentsUseCase.js';
import { DeleteCommentUseCase } from '../use-cases/DeleteCommentUseCase.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

interface CommentRoutesDependencies {
  createCommentUseCase: CreateCommentUseCase;
  listCommentsUseCase: ListCommentsUseCase;
  deleteCommentUseCase: DeleteCommentUseCase;
}

export function commentRoutes(app: FastifyInstance, deps: CommentRoutesDependencies) {
  // Criar comentário (PUBLIC - com reCAPTCHA)
  app.post('/api/candidates/:id/comments', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const body = request.body as {
        authorName: string;
        content: string;
        recaptchaToken?: string;
      };

      const result = await deps.createCommentUseCase.execute({
        candidateId: id,
        authorName: body.authorName,
        content: body.content,
        recaptchaToken: body.recaptchaToken,
      });

      return reply.status(201).send({
        success: true,
        data: result,
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao criar comentário.',
      });
    }
  });

  // Listar comentários (PUBLIC)
  app.get('/api/candidates/:id/comments', async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      const result = await deps.listCommentsUseCase.execute(id);

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

  // Excluir comentário (ADMIN - protegido)
  app.delete('/api/comments/:id', { preHandler: [authMiddleware] }, async (request, reply) => {
    try {
      const { id } = request.params as { id: string };

      await deps.deleteCommentUseCase.execute(id);

      return reply.send({
        success: true,
        message: 'Comentário excluído.',
      });
    } catch (error) {
      return reply.status(400).send({
        success: false,
        error: error instanceof Error ? error.message : 'Erro.',
      });
    }
  });
}
