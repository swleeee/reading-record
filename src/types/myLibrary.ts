import type { Document } from './book';
import type { BookRecordServerData } from './record';

export interface GetMyLibraryQueryModel {
  userId: string;
  page?: number;
  pageSize?: number;
  filter: 'all' | 'ongoing' | 'completed';
  target: 'all' | 'myself';
}

export interface GetMyLibraryServerModel {
  records: (BookRecordServerData & {
    book: Document;
    users: { nickname: string; profile_url: string | null };
  })[];
  totalCount: number;
}
