import { FastifyInstance } from 'fastify';
import { GetDashboardUseCase } from '../use-cases/GetDashboardUseCase.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

interface DashboardRoutesDependencies {
  getDashboardUseCase: GetDashboardUseCase;
}

export function dashboardRoutes(app: FastifyInstance, deps: DashboardRoutesDependencies) {
  app.get('/api/admin/dashboard', { preHandler: [authMiddleware] }, async (_request, reply) => {
    try {
      const result = await deps.getDashboardUseCase.execute();

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
