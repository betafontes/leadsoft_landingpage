import { CandidateEntity } from '../entities/Candidate.js';

export interface ICandidateRepository {
  create(candidate: CandidateEntity): Promise<CandidateEntity>;
  findById(id: string): Promise<CandidateEntity | null>;
  findByCpf(cpf: string): Promise<CandidateEntity | null>;
  findByEmail(email: string): Promise<CandidateEntity | null>;
  findAll(page: number, limit: number, search?: string): Promise<{ items: CandidateEntity[]; total: number }>;
  delete(id: string): Promise<void>;
  storeImage(candidateId: string, imageBuffer: Buffer, fileName: string, contentType: string): Promise<void>;
  getImage(candidateId: string): Promise<{ data: Buffer; contentType: string } | null>;
  count(): Promise<number>;
}
