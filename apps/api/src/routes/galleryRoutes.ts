import { FastifyInstance } from 'fastify';
import { GetGalleryUseCase } from '../use-cases/GetGalleryUseCase.js';

interface GalleryRoutesDependencies {
  getGalleryUseCase: GetGalleryUseCase;
}

export function galleryRoutes(app: FastifyInstance, deps: GalleryRoutesDependencies) {
  app.get('/api/gallery', async (request, reply) => {
    try {
      const query = request.query as {
        page?: string;
        limit?: string;
      };

      const result = await deps.getGalleryUseCase.execute(
        Number(query.page || 1),
        Number(query.limit || 12),
      );

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
}
