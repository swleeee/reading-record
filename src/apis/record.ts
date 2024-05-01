import { supabase } from '@/lib';
import type {
  GetBookRecordQueryModel,
  GetBookRecordServerModel,
  UpdateBookRecordStateQueryModel,
} from '@/types';

export const getBookRecordAPI = async (req: GetBookRecordQueryModel) => {
  const { data, error } = await supabase
    .from('book_record')
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

export const updateBookRecordStateAPI = async (
  req: UpdateBookRecordStateQueryModel,
) => {
  const { data, error } = await supabase
    .from('book_record')
    .upsert(
      {
        user_id: req.userId,
        isbn: req.isbn,
        rating: req.rating ?? null,
        reading_start_at: req.readingStartDate ?? null,
        reading_end_at: req.readingEndDate ?? null,
        record_comment: req.recordComment ?? null,
        bookmark: req.bookMark ?? null,
      },
      { onConflict: 'isbn' },
    )
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
