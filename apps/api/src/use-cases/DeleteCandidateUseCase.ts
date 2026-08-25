import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';

export class DeleteCandidateUseCase {
  constructor(private candidateRepository: ICandidateRepository) {}

  async execute(id: string) {
    if (!id?.trim()) {
      throw new Error('ID do candidato é obrigatório.');
    }

    const candidate = await this.candidateRepository.findById(id);

    if (!candidate) {
      throw new Error('Candidato não encontrado.');
    }

    await this.candidateRepository.delete(id);

    return { success: true };
  }
}
