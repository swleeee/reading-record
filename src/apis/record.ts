import { supabase } from '@/lib';
import type { UpdateBookRecordStateQueryModel } from '@/types';

export const updateBookRecordState = async (
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
