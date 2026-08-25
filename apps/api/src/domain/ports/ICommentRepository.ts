import { CommentEntity } from '../entities/Comment.js';

export interface ICommentRepository {
  create(comment: CommentEntity): Promise<CommentEntity>;
  findById(id: string): Promise<CommentEntity | null>;
  findByCandidateId(candidateId: string): Promise<CommentEntity[]>;
  delete(id: string): Promise<void>;
  countByCandidateId(candidateId: string): Promise<number>;
  countAll(): Promise<number>;
}
