export interface AdminEntity {
  id: string | null;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  '@metadata'?: {
    '@collection': string;
  };
}

export function createAdmin(data: Omit<AdminEntity, 'id' | 'createdAt' | '@metadata'>): AdminEntity {
  return {
    id: null,
    ...data,
    createdAt: new Date().toISOString(),
    '@metadata': {
      '@collection': 'Admins',
    },
  };
}
