export interface BookRecordCardType {
  id: string;
  bookImgSrc: string;
  profileImgSrc: string | null;
  userName: string;
  likeCount: number;
  createdDate: string;
  content: string;
}
