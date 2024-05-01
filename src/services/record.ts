import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  createBookRecordStateAPI,
  getBookRecordAPI,
  updateBookRecordStateAPI,
} from '@/apis';
import type {
  CreateBookRecordStateQueryModel,
  GetBookRecordQueryModel,
  UpdateBookRecordStateQueryModel,
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

export const useCreateBookRecordStatus = () => {
  return useMutation({
    mutationFn: (req: CreateBookRecordStateQueryModel) =>
      createBookRecordStateAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.record(variables.isbn),
      });
    },
  });
};

export const useUpdateBookRecordStatus = () => {
  return useMutation({
    mutationFn: (req: UpdateBookRecordStateQueryModel) =>
      updateBookRecordStateAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.record(variables.isbn),
      });
    },
  });
};
