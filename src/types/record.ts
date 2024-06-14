import type { Document, Pagination } from '@/types';

export interface GetBookRecordQueryModel {
  userId: string;
  isbn: string;
}

export type BookRecordServerData = {
  created_at: string;
  updated_at: string;
  id: string;
  isbn: string;
  rating: number | null;
  reading_start_at: string | null;
  reading_end_at: string | null;
  record_comment: string | null;
  like_count: number;
  user_id: string;
};

export type GetBookRecordServerModel = BookRecordServerData[];

export interface CreateBookRecordQueryModel {
  userId: string;
  isbn: string;
  isPublic: boolean;
  rating: number | null;
  readingStartDate: string | null;
  readingEndDate: string | null;
  recordComment: string | null;
  bookMark?: boolean;
}

export interface UpdateBookRecordQueryModel extends CreateBookRecordQueryModel {
  recordId: string;
}

export interface GetBookUserRecordsQueryModel {
  isbn: string;
  page: number;
  pageSize: number;
  sort: 'like' | 'recent';
}

export interface GetBookUserRecordsServerModel {
  ratingTotal: number | null;
  records: (BookRecordServerData & {
    users: { nickname: string; profile_url: string | null };
  })[];
  pageInfo: Pagination;
}

export interface GetTotalLikeForRecordQueryModel {
  isbn: string;
  userId: string;
  recordId: string;
}

export interface GetTotalLikeForRecordServerModel {
  isliked: boolean;
  count: number;
}

export interface CreateLikeForRecordQueryModel {
  isbn: string;
  userId: string;
  recordId: string;
}

export interface DeleteLikeForRecordQueryModel {
  isbn: string;
  userId: string;
  recordId: string;
}

export interface GetBestRecordsQueryModel {
  startDateTime: string;
  endDateTime: string;
}

export type GetBestRecordsServerModel = {
  created_at: string;
  updated_at: string;
  id: string;
  user_id: string;
  isbn: string;
  rating: number;
  reading_start_at: string;
  reading_end_at: string;
  record_comment: string;
  thumbnail: string;
  nickname: string;
  profile_url: string | null;
  like_count: number; // TODO: 추후 삭제 필요
}[];

export interface GetMyTotalLikeCountQueryModel {
  userId: string;
}

export interface GetUserRecordQueryModel {
  userId: string;
  page?: number;
  pageSize?: number;
  filter: 'all' | 'ongoing' | 'completed';
  target: 'all' | 'myself';
}

export interface GetUserRecordServerModel {
  records: (BookRecordServerData & {
    book: Document;
    users: { nickname: string; profile_url: string | null };
  })[];
  totalCount: number;
}
