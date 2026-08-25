import { z } from 'zod';

function isValidCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false;

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleaned.charAt(i)) * (10 - i);
  }
  let remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleaned.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10) remainder = 0;
  if (remainder !== parseInt(cleaned.charAt(10))) return false;

  return true;
}

export const createCandidateSchema = z.object({
  name: z
    .string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .trim(),
  cpf: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 11, 'CPF deve ter 11 dígitos')
    .refine(isValidCPF, 'CPF inválido'),
  email: z
    .string()
    .email('E-mail inválido')
    .max(255, 'E-mail deve ter no máximo 255 caracteres')
    .transform((val) => val.toLowerCase().trim()),
  birthDate: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), 'Data de nascimento inválida'),
  caption: z
    .string()
    .min(3, 'Legenda deve ter no mínimo 3 caracteres')
    .max(200, 'Legenda deve ter no máximo 200 caracteres')
    .trim(),
});

export type CreateCandidateInput = z.input<typeof createCandidateSchema>;
export type CreateCandidateData = z.output<typeof createCandidateSchema>;
