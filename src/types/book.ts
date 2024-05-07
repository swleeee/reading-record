import { BOOK_READING_STATUS_OPTIONS } from '@/constants';

export interface BookRecordCardType {
  id: string;
  bookImgSrc: string;
  profileImgSrc: string | null;
  userName: string;
  likeCount: number;
  createdDate: string;
  content: string;
}

export interface ReadingBookCardType {
  id: string;
  bookImgSrc: string;
  title: string;
  publisher: string;
  authors: string[];
  readingStartDate: string;
}

export interface PopularBookCardType {
  id: string;
  bookImgSrc: string;
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

interface Document {
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

export interface GetMyLibraryServerModel {
  pageInfo: {
    totalCount: number;
    totalPages: number;
  };
  books: {
    isbn: string;
    readingStatus: (typeof BOOK_READING_STATUS_OPTIONS)[number]['key'];
    rating: number | null;
    thumbnail: string;
    bookTitle: string;
    bookContent: string;
    authors: string[];
    translators: string[];
    datetime: string;
    publisher: string;
  }[];
}
