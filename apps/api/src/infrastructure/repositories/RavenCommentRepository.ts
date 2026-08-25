import { ICommentRepository } from '../../domain/ports/ICommentRepository.js';
import { CommentEntity } from '../../domain/entities/Comment.js';
import { getDocumentStore } from '../database/ravendb.js';

export class RavenCommentRepository implements ICommentRepository {
  async create(comment: CommentEntity): Promise<CommentEntity> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      await session.store(comment, undefined, {
        documentType: 'Comments',
      });
      await session.saveChanges();
      return comment;
    } finally {
      session.dispose();
    }
  }

  async findById(id: string): Promise<CommentEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const comment = await session.load<CommentEntity>(id);
      return comment || null;
    } finally {
      session.dispose();
    }
  }

  async findByCandidateId(candidateId: string): Promise<CommentEntity[]> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      return await session.query<CommentEntity>({ collection: 'Comments' })
        .whereEquals('candidateId', candidateId)
        .orderByDescending('createdAt')
        .all();
    } finally {
      session.dispose();
    }
  }

  async delete(id: string): Promise<void> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      await session.delete(id);
      await session.saveChanges();
    } finally {
      session.dispose();
    }
  }

  async countByCandidateId(candidateId: string): Promise<number> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      return await session.query<CommentEntity>({ collection: 'Comments' })
        .whereEquals('candidateId', candidateId)
        .count();
    } finally {
      session.dispose();
    }
  }

  async countAll(): Promise<number> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      return await session.query<CommentEntity>({ collection: 'Comments' }).count();
    } finally {
      session.dispose();
    }
  }
}
