import { useSuspenseQuery } from '@tanstack/react-query';

import { getBookDetailAPI, getBooksAPI } from '../api/bookApi';
import type {
  GetBookDetailQueryModel,
  GetBooksQueryModel,
} from '../model/types';

export const bookKeys = {
  all: ['book'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (req: GetBooksQueryModel) => [...bookKeys.lists(), req] as const,
  details: () => [...bookKeys.all, 'detail'] as const,
  detail: (isbn: string) => [...bookKeys.details(), isbn] as const,
};

export const useGetBooks = (req: GetBooksQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookKeys.list(req),
    queryFn: () => (req.query ? getBooksAPI(req) : null),
  });
};

export const useGetBookDetail = (req: GetBookDetailQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookKeys.detail(req.query),
    queryFn: () => (req.query ? getBookDetailAPI(req) : null),
  });
};
