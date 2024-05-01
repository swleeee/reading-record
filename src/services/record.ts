import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  createBookRecordAPI,
  getBookRecordAPI,
  updateBookRecordAPI,
} from '@/apis';
import type {
  CreateBookRecordQueryModel,
  GetBookRecordQueryModel,
  UpdateBookRecordQueryModel,
} from '@/types';
import queryClient from './queryClient';
import { bookKeys } from './book';

const bookRecordKeys = {
  record: (isbn: string) => [...bookKeys.detail(isbn), 'record'] as const,
};

export const useGetBookRecord = (req: GetBookRecordQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.record(req.isbn),
    queryFn: () => getBookRecordAPI(req),
  });
};

export const useCreateBookRecord = () => {
  return useMutation({
    mutationFn: (req: CreateBookRecordQueryModel) => createBookRecordAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.record(variables.isbn),
      });
    },
  });
};

export const useUpdateBookRecord = () => {
  return useMutation({
    mutationFn: (req: UpdateBookRecordQueryModel) => updateBookRecordAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.record(variables.isbn),
      });
    },
  });
};
