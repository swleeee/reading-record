export interface UpdateBookRecordStateQueryModel {
  userId: string;
  isbn: string;
  rating: number | null;
  readingStartDate: string | null;
  readingEndDate: string | null;
  recordComment: string | null;
  bookMark?: boolean;
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
