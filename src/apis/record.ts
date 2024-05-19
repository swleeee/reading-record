import { supabase } from '@/lib';
import { DB_TABLE_NAME } from '@/constants';
import type {
  CreateBookRecordQueryModel,
  CreateLikeForRecordQueryModel,
  DeleteLikeForRecordQueryModel,
  GetBestRecordsQueryModel,
  GetBestRecordsServerModel,
  GetBookRecordQueryModel,
  GetBookRecordServerModel,
  GetBookUserRecordsQueryModel,
  GetBookUserRecordsServerModel,
  GetMyTotalLikeCountQueryModel,
  GetTotalLikeForRecordQueryModel,
  GetTotalLikeForRecordServerModel,
  UpdateBookRecordQueryModel,
} from '@/types';

export const getBookRecordAPI = async (req: GetBookRecordQueryModel) => {
  const { data, error } = await supabase
    .from(DB_TABLE_NAME.BOOK_RECORD)
    .select(
      'created_at, updated_at, id, isbn, rating, reading_start_at, reading_end_at, record_comment',
    )
    .eq('user_id', req.userId)
    .eq('isbn', req.isbn)
    .limit(1)
    .returns<GetBookRecordServerModel>();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const createBookRecordPayload = (req: CreateBookRecordQueryModel) => {
  return {
    user_id: req.userId,
    isbn: req.isbn,
    public_flag: req.isPublic,
    rating: req.rating ?? null,
    reading_start_at: req.readingStartDate ?? null,
    reading_end_at: req.readingEndDate ?? null,
    record_comment: req.recordComment ?? null,
    bookmark: req.bookMark ?? null,
  };
};

export const createBookRecordAPI = async (req: CreateBookRecordQueryModel) => {
  const value = createBookRecordPayload(req);

  const { data, error } = await supabase
    .from(DB_TABLE_NAME.BOOK_RECORD)
    .insert(value)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateBookRecordAPI = async (req: UpdateBookRecordQueryModel) => {
  const { recordId, ...rest } = req;
  const value = createBookRecordPayload(rest);

  const { data, error } = await supabase
    .from(DB_TABLE_NAME.BOOK_RECORD)
    .update(value)
    .eq('id', recordId)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getBookUserRecordsAPI = async (
  req: GetBookUserRecordsQueryModel,
) => {
  // NOTE: 쿼리 시작
  let query = supabase
    .from('book_record')
    .select(
      'created_at, updated_at, id, isbn, rating, reading_start_at, reading_end_at, record_comment, like_count, user_id, users(nickname, profile_url)',
    )
    .eq('isbn', req.isbn)
    .eq('public_flag', true)
    .not('rating', 'is', null)
    .not('reading_start_at', 'is', null)
    .not('reading_end_at', 'is', null)
    .not('record_comment', 'is', null);

  // NOTE: 정렬 방식 적용
  if (req.sort === 'like') {
    query = query.order('like_count', { ascending: false });
  }
  if (req.sort === 'recent') {
    query = query.order('created_at', { ascending: false });
  }

  // NOTE: 페이징 적용
  query = query.range(
    (req.page - 1) * req.pageSize,
    req.page * req.pageSize - 1,
  );

  // NOTE: 쿼리 실행
  const { data: records, error: recordsError } = await query.returns<
    GetBookUserRecordsServerModel['records']
  >();

  if (recordsError) {
    throw new Error(recordsError.message);
  }

  const { data: ratingData, error: ratingError } = await supabase
    .rpc('get_book_rating_summary', {
      input_isbn: req.isbn,
    })
    .returns<
      [
        {
          count: GetBookUserRecordsServerModel['pageInfo']['totalCount'];
          rating_total: GetBookUserRecordsServerModel['ratingTotal'];
        },
      ]
    >();

  if (ratingError) {
    throw new Error(ratingError.message);
  }

  const data: GetBookUserRecordsServerModel = {
    ratingTotal: ratingData[0].rating_total,
    records,
    pageInfo: {
      totalCount: ratingData[0].count,
      totalPages: Math.ceil(ratingData[0].count / req.pageSize),
    },
  };

  return data;
};

export const getTotalLikeForRecordAPI = async (
  req: GetTotalLikeForRecordQueryModel,
) => {
  const { data, error } = await supabase
    .rpc('get_book_record_like_summary', {
      input_record_id: req.recordId,
      input_user_id: req.userId,
    })
    .returns<[GetTotalLikeForRecordServerModel]>();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const createLikeForRecordAPI = async (
  req: CreateLikeForRecordQueryModel,
) => {
  const { error } = await supabase.from(DB_TABLE_NAME.BOOK_RECORD_LIKE).insert({
    user_id: req.userId,
    record_id: req.recordId,
  });

  if (error) {
    throw new Error(error.message);
  }
};

export const deleteLikeForRecordAPI = async (
  req: DeleteLikeForRecordQueryModel,
) => {
  const { error } = await supabase
    .from(DB_TABLE_NAME.BOOK_RECORD_LIKE)
    .delete()
    .eq('record_id', req.recordId)
    .eq('user_id', req.userId);

  if (error) {
    throw new Error(error.message);
  }
};

export const getBestRecordsAPI = async (req: GetBestRecordsQueryModel) => {
  const { data, error } = await supabase
    .rpc('get_best_record', {
      startdatetime: req.startDateTime,
      enddatetime: req.endDateTime,
      limitcount: 10,
    })
    .returns<GetBestRecordsServerModel>();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getMyTotalLikeCountAPI = async (
  req: GetMyTotalLikeCountQueryModel,
) => {
  const { data, error } = await supabase
    .rpc('get_my_like_total_count', {
      input_user_id: req.userId,
    })
    .returns<number>();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
