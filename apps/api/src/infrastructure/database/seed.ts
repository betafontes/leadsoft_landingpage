import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { getDocumentStore } from './ravendb.js';
import { createAdmin } from '../../domain/entities/Admin.js';

async function seed() {
  const email = process.env.ADMIN_EMAIL || 'LeadIA@leadsoft.inf.br';
  const password = process.env.ADMIN_PASSWORD || 'Lead@1234';

  const store = getDocumentStore();
  const session = store.openSession();

  try {
    const existing = await session.query({ collection: 'Admins' })
      .whereEquals('email', email)
      .firstOrNull();

    if (existing) {
      console.log('ℹ️  Admin already exists. Skipping seed.');
      return;
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const admin = createAdmin({
      name: 'Administrador LeadIA',
      email,
      passwordHash,
    });

    await session.store(admin, undefined, { documentType: 'Admins' });
    await session.saveChanges();

    console.log(`✅ Admin user created: ${email}`);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    session.dispose();
    store.dispose();
  }
}

seed();
