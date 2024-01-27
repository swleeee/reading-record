export interface BookCardType {
  id: string;
  bookImgSrc: string;
  profileImgSrc: string | null;
  userName: string;
  likeCount: number;
  content: string;
}
