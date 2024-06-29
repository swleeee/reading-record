export interface PopularBookCardType {
  id: string;
  bookImgSrc?: string; // TODO: 옵셔널 제거 필요
  title: string;
  content: string;
}

export interface GetBooksQueryModel {
  query: string; // NOTE: 필수
  sort: 'accuracy' | 'latest'; // NOTE: 기본값: accuracy
  page: number;
  size: number;
  target: 'title' | 'isbn' | 'publisher' | 'person';
  userId: string;
}

export interface GetBookDetailQueryModel {
  query: string;
}

export interface Document {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

export interface GetBooksServerModel {
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
  documents: (Document & {
    // myRecord: {
    //   reading_start_at: string | null;
    //   reading_end_at: string | null;
    // };
    record: { ratingTotal: number; count: number };
  })[];
}

export interface GetBookDetailServerModel {
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
  documents: Document[];
}
