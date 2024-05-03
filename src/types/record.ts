import type { Pagination } from '@/types';

export interface GetBookRecordQueryModel {
  userId: string;
  isbn: string;
}

type BookRecordServerData = {
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
