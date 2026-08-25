import { ICandidateRepository } from '../domain/ports/ICandidateRepository.js';

interface ListCandidatesRequest {
  page?: number;
  limit?: number;
  search?: string;
}

export class ListCandidatesUseCase {
  constructor(private candidateRepository: ICandidateRepository) {}

  async execute({ page = 1, limit = 10, search }: ListCandidatesRequest = {}) {
    const safePage = Math.max(1, page);
    const safeLimit = Math.min(Math.max(1, limit), 100);

    const result = await this.candidateRepository.findAll(safePage, safeLimit, search);

    return {
      items: result.items,
      total: result.total,
      page: safePage,
      limit: safeLimit,
      totalPages: Math.ceil(result.total / safeLimit),
    };
  }
}
