import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';
import { ICommentRepository } from '../domain/ports/ICommentRepository.js';

export class GetDashboardUseCase {
  constructor(
    private candidateRepository: ICandidateRepository,
    private commentRepository: ICommentRepository,
  ) {}

  async execute() {
    const [totalCandidates, totalComments] = await Promise.all([
      this.candidateRepository.count(),
      this.commentRepository.countAll(),
    ]);

    return {
      totalCandidates,
      totalComments,
    };
  }
}
