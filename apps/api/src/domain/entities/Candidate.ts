export interface CandidateEntity {
  id: string | null;
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  caption: string;
  createdAt: string;
  updatedAt: string;
  '@metadata'?: {
    '@collection': string;
  };
}

export function createCandidate(data: Omit<CandidateEntity, 'id' | 'createdAt' | 'updatedAt' | '@metadata'>): CandidateEntity {
  const now = new Date().toISOString();
  return {
    id: null,
    ...data,
    createdAt: now,
    updatedAt: now,
    '@metadata': {
      '@collection': 'Candidates',
    },
  };
}
