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
