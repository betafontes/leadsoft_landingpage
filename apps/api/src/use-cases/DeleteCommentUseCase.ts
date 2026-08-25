import { ICommentRepository } from '../domain/ports/ICommentRepository.js';

export class DeleteCommentUseCase {
  constructor(private commentRepository: ICommentRepository) {}

  async execute(id: string) {
    if (!id?.trim()) {
      throw new Error('ID do comentário é obrigatório.');
    }

    const comment = await this.commentRepository.findById(id);

    if (!comment) {
      throw new Error('Comentário não encontrado.');
    }

    await this.commentRepository.delete(id);

    return { success: true };
  }
}
