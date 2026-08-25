import { z } from 'zod';

export const createCommentSchema = z.object({
  authorName: z
    .string()
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(80, 'Nome deve ter no máximo 80 caracteres')
    .trim(),
  content: z
    .string()
    .min(1, 'Comentário não pode ser vazio')
    .max(500, 'Comentário deve ter no máximo 500 caracteres')
    .trim(),
});

export type CreateCommentInput = z.input<typeof createCommentSchema>;
export type CreateCommentData = z.output<typeof createCommentSchema>;
