import { useSuspenseQuery } from '@tanstack/react-query';

import { getBooksAPI } from '@/apis';
import type { GetBooksQueryModel } from '@/types';

const bookKeys = {
  all: ['book'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (req: GetBooksQueryModel) => [...bookKeys.lists(), req] as const,
};

export const useGetBooks = (req: GetBooksQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookKeys.list(req),
    queryFn: () => (req.query ? getBooksAPI(req) : null),
  });
};
