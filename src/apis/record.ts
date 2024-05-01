import { supabase } from '@/lib';
import { DB_TABLE_NAME } from '@/constants';
import type {
  CreateBookRecordQueryModel,
  GetBookRecordQueryModel,
  GetBookRecordServerModel,
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
