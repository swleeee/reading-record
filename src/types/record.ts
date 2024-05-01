export interface GetBookRecordQueryModel {
  userId: string;
  isbn: string;
}

export type GetBookRecordServerModel = {
  created_at: string;
  updated_at: string;
  id: string;
  isbn: string;
  rating: number | null;
  reading_start_at: string | null;
  reading_end_at: string | null;
  record_comment: string | null;
}[];

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

export interface GetBookRecordsServerModel {
  pageInfo: {
    totalCount: number;
    totalPages: number;
  };
  records: {
    id: string;
    userName: string;
    createdDate: string;
    profileImgSrc: string | null;
    likeCount: number;
    content: string;
    rating: number;
  }[];
}
