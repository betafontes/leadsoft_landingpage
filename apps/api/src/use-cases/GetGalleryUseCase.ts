import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';
import { ICommentRepository } from '../domain/ports/ICommentRepository.js';

export class GetGalleryUseCase {
  constructor(
    private candidateRepository: ICandidateRepository,
    private commentRepository: ICommentRepository,
  ) {}

  async execute(page = 1, limit = 12) {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(Math.max(1, limit), 50);

    const result = await this.candidateRepository.findAll(safePage, safeLimit);

    const items = await Promise.all(
      result.items.map(async (candidate) => {
        const commentCount = await this.commentRepository.countByCandidateId(candidate.id!);
        return {
          id: candidate.id,
          name: candidate.name,
          caption: candidate.caption,
          imageUrl: `/api/candidates/${candidate.id}/image`,
          commentCount,
          createdAt: candidate.createdAt,
        };
      }),
    );

    return {
      items,
      total: result.total,
      page: safePage,
      limit: safeLimit,
      totalPages: Math.ceil(result.total / safeLimit),
    };
  }
}
