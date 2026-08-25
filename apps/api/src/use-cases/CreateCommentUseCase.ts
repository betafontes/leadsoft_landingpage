import { createCommentSchema } from '@leadsoft/shared';
import { ICommentRepository } from '../domain/ports/ICommentRepository.js';
import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';
import { createComment } from '../domain/entities/Comment.js';
import { env } from '../config/env.js';

interface CreateCommentRequest {
  candidateId: string;
  authorName: string;
  content: string;
  recaptchaToken?: string;
}

export class CreateCommentUseCase {
  constructor(
    private commentRepository: ICommentRepository,
    private candidateRepository: ICandidateRepository,
  ) {}

  async execute(data: CreateCommentRequest) {
    const parsed = createCommentSchema.safeParse({
      authorName: data.authorName,
      content: data.content,
    });

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] || 'Dados inválidos';
      throw new Error(firstError);
    }

    // Validate reCAPTCHA server-side
    if (env.RECAPTCHA_SECRET_KEY && env.RECAPTCHA_SECRET_KEY !== '') {
      await this.verifyRecaptcha(data.recaptchaToken);
    }

    const candidate = await this.candidateRepository.findById(data.candidateId);

    if (!candidate) {
      throw new Error('Candidato não encontrado.');
    }

    const comment = createComment({
      candidateId: data.candidateId,
      authorName: parsed.data.authorName,
      content: parsed.data.content,
    });

    return this.commentRepository.create(comment);
  }

  private async verifyRecaptcha(token?: string) {
    if (!token) {
      throw new Error('Token reCAPTCHA é obrigatório.');
    }

    try {
      const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      });

      const result = await response.json() as { success: boolean; score?: number };

      if (!result.success || (result.score !== undefined && result.score < 0.5)) {
        throw new Error('Verificação reCAPTCHA falhou.');
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('reCAPTCHA')) {
        throw error;
      }
      // If recaptcha service fails, log but allow (graceful degradation)
      console.warn('reCAPTCHA verification service unavailable:', error);
    }
  }
}
