import { IAdminRepository } from '../../domain/ports/IAdminRepository.js';
import { AdminEntity } from '../../domain/entities/Admin.js';
import { getDocumentStore } from '../database/ravendb.js';

export class RavenAdminRepository implements IAdminRepository {
  async create(admin: AdminEntity): Promise<AdminEntity> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      await session.store(admin, undefined, {
        documentType: 'Admins',
      });
      await session.saveChanges();
      return admin;
    } finally {
      session.dispose();
    }
  }

  async findByEmail(email: string): Promise<AdminEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const admin = await session.query<AdminEntity>({ collection: 'Admins' })
        .whereEquals('email', email)
        .firstOrNull();
      return admin;
    } finally {
      session.dispose();
    }
  }

  async findById(id: string): Promise<AdminEntity | null> {
    const store = getDocumentStore();
    const session = store.openSession();
    try {
      const admin = await session.load<AdminEntity>(id);
      return admin || null;
    } finally {
      session.dispose();
    }
  }
}
