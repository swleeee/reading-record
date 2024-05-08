import { useSuspenseQuery } from '@tanstack/react-query';

import { getMyLibrariesAPI } from '@/apis';
import type { GetMyLibraryQueryModel } from '@/types';

const myLibrary = {
  all: ['myLibrary'] as const,
  lists: () => [...myLibrary.all, 'list'] as const,
  list: (req: GetMyLibraryQueryModel) => [...myLibrary.lists(), req] as const,
};

export const useGetMyLibraries = (req: GetMyLibraryQueryModel) => {
  return useSuspenseQuery({
    queryKey: myLibrary.list(req),
    queryFn: () => getMyLibrariesAPI(req),
  });
};
