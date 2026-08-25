import { Readable } from 'stream';
import { ICandidateRepository } from '../../domain/ports/ICandidateRepository.js';
import { CandidateEntity } from '../../domain/entities/Candidate.js';
import { getDocumentStore } from '../database/ravendb.js';

export class RavenCandidateRepository implements ICandidateRepository {
  async create(candidate: CandidateEntity): Promise<CandidateEntity> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      await session.store(candidate, undefined, {
        documentType: 'Candidates',
      });
      await session.saveChanges();
      return candidate;
    } finally {
      session.dispose();
    }
  }

  async findById(id: string): Promise<CandidateEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const candidate = await session.load<CandidateEntity>(id);
      return candidate || null;
    } finally {
      session.dispose();
    }
  }

  async findByCpf(cpf: string): Promise<CandidateEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const candidate = await session.query<CandidateEntity>({ collection: 'Candidates' })
        .whereEquals('cpf', cpf)
        .firstOrNull();
      return candidate;
    } finally {
      session.dispose();
    }
  }

  async findByEmail(email: string): Promise<CandidateEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const candidate = await session.query<CandidateEntity>({ collection: 'Candidates' })
        .whereEquals('email', email.toLowerCase())
        .firstOrNull();
      return candidate;
    } finally {
      session.dispose();
    }
  }

  async findAll(page: number, limit: number, search?: string): Promise<{ items: CandidateEntity[]; total: number }> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      let query = session.query<CandidateEntity>({ collection: 'Candidates' });

      if (search && search.trim()) {
        query = query.search('name', `*${search}*`)
          .orElse()
          .search('email', `*${search}*`);
      }

      const total = await session.query<CandidateEntity>({ collection: 'Candidates' })
        .count();

      const items = await query
        .orderByDescending('createdAt')
        .skip((page - 1) * limit)
        .take(limit)
        .all();

      return { items, total };
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

  async storeImage(candidateId: string, imageBuffer: Buffer, fileName: string, contentType: string): Promise<void> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const stream = Readable.from(imageBuffer);
      session.advanced.attachments.store(candidateId, 'photo', stream, contentType);
      await session.saveChanges();
    } finally {
      session.dispose();
    }
  }

  async getImage(candidateId: string): Promise<{ data: Buffer; contentType: string } | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const result = await session.advanced.attachments.get(candidateId, 'photo');
      if (!result) return null;

      const chunks: Buffer[] = [];
      for await (const chunk of result.data as any) {
        chunks.push(Buffer.from(chunk));
      }
      const data = Buffer.concat(chunks);

      return {
        data,
        contentType: result.details.contentType || 'image/jpeg',
      };
    } finally {
      session.dispose();
    }
  }

  async count(): Promise<number> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      return await session.query<CandidateEntity>({ collection: 'Candidates' }).count();
    } finally {
      session.dispose();
    }
  }
}
