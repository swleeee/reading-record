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
}

export interface GetBooksServerModel {
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
  documents: {
    readingStatus: (typeof BOOK_READING_STATUS_OPTIONS)[number]['key'];
    rating: number | null;
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
  }[];
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
