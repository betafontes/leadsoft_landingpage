import { FastifyRequest, FastifyReply } from 'fastify';
import { jwtVerify } from 'jose';
import { env } from '../config/env.js';

export async function authMiddleware(request: FastifyRequest, reply: FastifyReply) {
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

    (request as any).adminId = payload.sub;
    (request as any).adminEmail = payload.email;
  } catch {
    reply.clearCookie('admin_token', { path: '/' });
    return reply.status(401).send({
      success: false,
      error: 'Token inválido ou expirado.',
    });
  }
}
