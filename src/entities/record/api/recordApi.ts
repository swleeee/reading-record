import { supabase } from '@/shared/lib';
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
  GetUserRecordQueryModel,
  GetUserRecordServerModel,
  UpdateBookRecordQueryModel,
} from '../model/types';

const BOOK_RECORD_TABLE_NAME = 'book_record';
const BOOK_RECORD_LIKE_TABLE_NAME = 'book_record_like';

export const getBookRecordAPI = async (req: GetBookRecordQueryModel) => {
  const { data, error } = await supabase
    .from(BOOK_RECORD_TABLE_NAME)
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
    .from(BOOK_RECORD_TABLE_NAME)
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
    .from(BOOK_RECORD_TABLE_NAME)
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
    .from(BOOK_RECORD_TABLE_NAME)
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
  const { error } = await supabase.from(BOOK_RECORD_LIKE_TABLE_NAME).insert({
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
    .from(BOOK_RECORD_LIKE_TABLE_NAME)
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

export const getUserRecordsAPI = async (req: GetUserRecordQueryModel) => {
  // NOTE: 쿼리 시작
  let query = supabase
    .from(BOOK_RECORD_TABLE_NAME)
    .select(
      'created_at, updated_at, id, isbn, rating, reading_start_at, reading_end_at, record_comment, like_count, user_id, users(nickname, profile_url), book!inner(thumbnail, isbn, title, authors, translators, publisher, datetime, contents)',
      { count: 'exact' },
    );

  if (req.target === 'myself') {
    query = query.eq('user_id', req.userId);
  }

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

  // NOTE: 독서 기록 페이지에서는 페이징 적용하나, 메인 화면의 현재 읽고 있는 책 조회 시에는 페이징 적용 X
  if (req.page && req.pageSize) {
    query = query.range(
      (req.page - 1) * req.pageSize,
      req.page * req.pageSize - 1,
    );
  }

  // NOTE: 쿼리 실행
  const {
    data: records,
    error: recordsError,
    count: totalCount,
  } = await query.returns<GetUserRecordServerModel['records']>();

  if (recordsError) {
    throw new Error(recordsError.message);
  }

  return { records, totalCount };
};
