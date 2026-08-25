export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GalleryItem {
  id: string;
  name: string;
  caption: string;
  imageUrl: string;
  commentCount: number;
}

export interface AdminResponse {
  id: string;
  email: string;
}
