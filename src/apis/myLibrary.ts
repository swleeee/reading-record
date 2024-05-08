import { supabase } from '@/lib';
import { DB_TABLE_NAME } from '@/constants';
import type { GetMyLibraryQueryModel, GetMyLibraryServerModel } from '@/types';

export const getMyLibrariesAPI = async (req: GetMyLibraryQueryModel) => {
  // NOTE: 쿼리 시작
  let query = supabase
    .from(DB_TABLE_NAME.BOOK_RECORD)
    .select(
      'created_at, updated_at, id, isbn, rating, reading_start_at, reading_end_at, record_comment, like_count, user_id, users(nickname, profile_url), book!inner(thumbnail, isbn, title, authors, translators, publisher, datetime, contents)',
      { count: 'exact' },
    )
    .eq('user_id', req.userId);

  if (req.filter === 'ongoing') {
    query = query
      .is('rating', null)
      .not('reading_start_at', 'is', null)
      .is('reading_end_at', null)
      .is('record_comment', null);
  }

  if (req.filter === 'completed') {
    query = query
      .not('rating', 'is', null)
      .not('reading_start_at', 'is', null)
      .not('reading_end_at', 'is', null)
      .not('record_comment', 'is', null);
  }

  // NOTE: 페이징 적용
  query = query.range(
    (req.page - 1) * req.pageSize,
    req.page * req.pageSize - 1,
  );

  // NOTE: 쿼리 실행
  const {
    data: records,
    error: recordsError,
    count: totalCount,
  } = await query.returns<GetMyLibraryServerModel['records']>();

  if (recordsError) {
    throw new Error(recordsError.message);
  }

  return { records, totalCount };
};
