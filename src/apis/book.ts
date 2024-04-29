import axios from 'axios';

import type { GetBooksQueryModel, GetBooksServerModel } from '@/types';

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
