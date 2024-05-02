import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  createBookRecordAPI,
  createLikeForRecordAPI,
  getBookRecordAPI,
  getBookUserRecordsAPI,
  updateBookRecordAPI,
} from '@/apis';
import type {
  CreateBookRecordQueryModel,
  CreateLikeForRecordQueryModel,
  GetBookRecordQueryModel,
  GetBookUserRecordsQueryModel,
  UpdateBookRecordQueryModel,
} from '@/types';
import queryClient from './queryClient';
import { bookKeys } from './book';

const bookRecordKeys = {
  myRecord: (isbn: string) => [...bookKeys.detail(isbn), 'myRecord'] as const,
  userRecords: (filter: GetBookUserRecordsQueryModel) => {
    const { isbn, ...rest } = filter;
    return [...bookKeys.detail(isbn), 'userRecords', rest] as const;
  },
};

export const useGetBookRecord = (req: GetBookRecordQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.myRecord(req.isbn),
    queryFn: () => getBookRecordAPI(req),
  });
};

export const useCreateBookRecord = () => {
  return useMutation({
    mutationFn: (req: CreateBookRecordQueryModel) => createBookRecordAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.myRecord(variables.isbn),
      });
    },
  });
};

export const useUpdateBookRecord = () => {
  return useMutation({
    mutationFn: (req: UpdateBookRecordQueryModel) => updateBookRecordAPI(req),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.myRecord(variables.isbn),
      });
    },
  });
};

export const useGetBookUserRecords = (req: GetBookUserRecordsQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.userRecords(req),
    queryFn: () => getBookUserRecordsAPI(req),
  });
};

export const useCreateLikeForRecord = () => {
  return useMutation({
    mutationFn: (req: CreateLikeForRecordQueryModel) =>
      createLikeForRecordAPI(req),

    onSuccess: (_, variables) => {}, // TODO: 좋아요 조회 기능 구현 후 작성 예정
  });
};
