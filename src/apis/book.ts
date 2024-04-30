import axios from 'axios';

import type {
  GetBookDetailQueryModel,
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
  const { data } = await Kakao.get<GetBooksServerModel>('/v3/search/book', {
    params: req,
  });

  return data;
};

export const getBookDetailAPI = async (req: GetBookDetailQueryModel) => {
  const { data } = await Kakao.get<GetBooksServerModel>(
    '/v3/search/book?sort=accuracy&page=1&size=10&target=isbn',
    { params: req },
  );

  return data;
};
