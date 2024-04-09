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

export interface GetBooksServerModel {
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
  documents: {
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
