import sharp from 'sharp';
import { createCandidateSchema } from '@leadsoft/shared';
import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';
import { createCandidate } from '../domain/entities/Candidate.js';
import { env } from '../config/env.js';

interface CreateCandidateRequest {
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  caption: string;
  imageBuffer: Buffer;
  imageName: string;
  imageMimeType: string;
  recaptchaToken?: string;
}

export class CreateCandidateUseCase {
  constructor(private candidateRepository: ICandidateRepository) {}

  async execute(data: CreateCandidateRequest) {
    // Validate text fields
    const parsed = createCandidateSchema.safeParse({
      name: data.name,
      cpf: data.cpf,
      email: data.email,
      birthDate: data.birthDate,
      caption: data.caption,
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

    // Validate image
    const allowedTypes = env.ALLOWED_IMAGE_TYPES.split(',');
    if (!allowedTypes.includes(data.imageMimeType)) {
      throw new Error('Formato de imagem não permitido. Use JPEG ou PNG.');
    }

    const maxBytes = env.MAX_FILE_SIZE_MB * 1024 * 1024;
    if (data.imageBuffer.length > maxBytes) {
      throw new Error(`Imagem deve ter no máximo ${env.MAX_FILE_SIZE_MB}MB.`);
    }

    // Validate dimensions
    const metadata = await sharp(data.imageBuffer).metadata();
    if (metadata.width !== env.REQUIRED_IMAGE_WIDTH || metadata.height !== env.REQUIRED_IMAGE_HEIGHT) {
      throw new Error(`A imagem deve ter exatamente ${env.REQUIRED_IMAGE_WIDTH}x${env.REQUIRED_IMAGE_HEIGHT} pixels.`);
    }

    // Check uniqueness
    const existingCpf = await this.candidateRepository.findByCpf(parsed.data.cpf);
    if (existingCpf) {
      throw new Error('CPF já cadastrado.');
    }

    const existingEmail = await this.candidateRepository.findByEmail(parsed.data.email);
    if (existingEmail) {
      throw new Error('E-mail já cadastrado.');
    }

    // Create candidate
    const candidate = createCandidate({
      name: parsed.data.name,
      cpf: parsed.data.cpf,
      email: parsed.data.email,
      birthDate: parsed.data.birthDate,
      caption: parsed.data.caption,
    });

    const created = await this.candidateRepository.create(candidate);

    // Store image as attachment
    await this.candidateRepository.storeImage(
      created.id!,
      data.imageBuffer,
      data.imageName,
      data.imageMimeType,
    );

    return {
      id: created.id!,
      name: created.name,
      caption: created.caption,
      createdAt: created.createdAt,
    };
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
      console.warn('reCAPTCHA verification service unavailable:', error);
    }
  }
}
