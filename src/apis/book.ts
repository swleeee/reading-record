import axios from 'axios';

import { supabase } from '@/lib';
import { getFirstIsbnSegment } from '@/utils';
import type {
  GetBookDetailQueryModel,
  GetBookDetailServerModel,
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
    { params: req },
  );

  const documents = await Promise.all(
    book.documents.map(async (document) => {
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
          input_isbn: document.isbn,
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
  const { data } = await Kakao.get<GetBookDetailServerModel>(
    '/v3/search/book?sort=accuracy&page=1&size=10&target=isbn',
    { params: req },
  );

  await supabase.from('book').upsert({
    isbn: data.documents[0].isbn,
    title: data.documents[0].title,
    contents: data.documents[0].contents,
    thumbnail: data.documents[0].thumbnail,
    authors: data.documents[0].authors,
    publisher: data.documents[0].publisher,
    url: data.documents[0].url,
    datetime: data.documents[0].datetime,
    translators: data.documents[0].translators,
    price: data.documents[0].price,
    sale_price: data.documents[0].sale_price,
    status: data.documents[0].status,
  });

  return data;
};
