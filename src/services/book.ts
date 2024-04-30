import { useSuspenseQuery } from '@tanstack/react-query';

import { getBookDetailAPI, getBooksAPI } from '@/apis';
import type { GetBookDetailQueryModel, GetBooksQueryModel } from '@/types';

const bookKeys = {
  all: ['book'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (req: GetBooksQueryModel) => [...bookKeys.lists(), req] as const,
  details: () => [...bookKeys.all, 'detail'] as const,
  detail: (req: GetBookDetailQueryModel) =>
    [...bookKeys.details(), req] as const,
};

export const useGetBooks = (req: GetBooksQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookKeys.list(req),
    queryFn: () => (req.query ? getBooksAPI(req) : null),
  });
};

export const useGetBookDetail = (req: GetBookDetailQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookKeys.detail(req),
    queryFn: () => (req.query ? getBookDetailAPI(req) : null),
  });
};
