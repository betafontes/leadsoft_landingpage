import { ICommentRepository } from '../domain/ports/ICommentRepository.js';

export class ListCommentsUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(candidateId: string) {
    if (!candidateId?.trim()) {
      throw new Error('ID do candidato é obrigatório.');
    }

    return this.commentRepository.findByCandidateId(candidateId);
  }
}
