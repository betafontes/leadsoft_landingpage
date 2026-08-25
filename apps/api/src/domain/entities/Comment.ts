export interface CommentEntity {
  id: string | null;
  candidateId: string;
  authorName: string;
  content: string;
  createdAt: string;
  '@metadata'?: {
    '@collection': string;
  };
}

export function createComment(data: Omit<CommentEntity, 'id' | 'createdAt' | '@metadata'>): CommentEntity {
  return {
    id: null,
    ...data,
    createdAt: new Date().toISOString(),
    '@metadata': {
      '@collection': 'Comments',
    },
  };
}
