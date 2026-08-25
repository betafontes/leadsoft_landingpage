import { AdminEntity } from '../entities/Admin.js';

export interface IAdminRepository {
  create(admin: AdminEntity): Promise<AdminEntity>;
  findByEmail(email: string): Promise<AdminEntity | null>;
  findById(id: string): Promise<AdminEntity | null>;
}
