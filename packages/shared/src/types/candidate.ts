export interface CandidateResponse {
  id: string;
  name: string;
  cpf: string;
  email: string;
  birthDate: string;
  caption: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface CandidateListItem {
  id: string;
  name: string;
  email: string;
  cpf: string;
  createdAt: string;
}

export interface ImageMetadata {
  originalName: string;
  mimeType: string;
  sizeInBytes: number;
}
