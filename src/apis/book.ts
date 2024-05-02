import axios from 'axios';

import { supabase } from '@/lib';
import type {
  GetBookDetailQueryModel,
  // GetBookUserRecordsServerModel,
  GetBooksQueryModel,
  GetBooksServerModel,
} from '@/types';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
  },
});

export const getBooksAPI = async (req: GetBooksQueryModel) => {
  const { data: book } = await Kakao.get<GetBooksServerModel>(
    '/v3/search/book',
    {
      params: req,
    },
  );

  const documents = await Promise.all(
    book.documents.map(async (document) => {
      const isbn = document.isbn
        ? document.isbn.split(' ').filter((item) => item)[0]
        : '';

      // const { data: records, error: recordsError } = await supabase
      //   .from('book_record')
      //   .select('reading_start_at, reading_end_at')
      //   .eq('user_id', req.userId)
      //   .eq('isbn', isbn)
      //   .returns<GetBookUserRecordsServerModel['records']>();

      // if (recordsError) {
      //   throw new Error(recordsError.message);
      // }

      const { data: ratingData, error: ratingError } = await supabase
        .rpc('get_book_rating_summary', {
          input_isbn: isbn,
        })
        .returns<
          [
            {
              count: GetBooksServerModel['documents'][number]['record']['count'];
              rating_total: GetBooksServerModel['documents'][number]['record']['count'];
            },
          ]
        >();

      if (ratingError) {
        throw new Error(ratingError.message);
      }

      return {
        ...document,
        // myRecord: {
        //   reading_start_at: records.length ? records[0].reading_start_at : null,
        //   reading_end_at: records.length ? records[0].reading_end_at : null,
        // },
        record: {
          ratingTotal: ratingData[0].rating_total,
          count: ratingData[0].count,
        },
      };
    }),
  );

  const data: GetBooksServerModel = { ...book, documents };

  return data;
};

export const getBookDetailAPI = async (req: GetBookDetailQueryModel) => {
  const { data } = await Kakao.get<GetBooksServerModel>(
    '/v3/search/book?sort=accuracy&page=1&size=10&target=isbn',
    { params: req },
  );

  return data;
};
