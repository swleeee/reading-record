import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  createBookRecordAPI,
  createLikeForRecordAPI,
  deleteLikeForRecordAPI,
  getBestRecordsAPI,
  getBookRecordAPI,
  getBookUserRecordsAPI,
  getTotalLikeForRecordAPI,
  updateBookRecordAPI,
} from '@/apis';
import type {
  CreateBookRecordQueryModel,
  CreateLikeForRecordQueryModel,
  DeleteLikeForRecordQueryModel,
  GetBestRecordsQueryModel,
  GetBookRecordQueryModel,
  GetBookUserRecordsQueryModel,
  GetTotalLikeForRecordQueryModel,
  GetTotalLikeForRecordServerModel,
  UpdateBookRecordQueryModel,
} from '@/types';
import queryClient from './queryClient';
import { bookKeys } from './book';

const bookRecordKeys = {
  myRecord: (isbn: string) => [...bookKeys.detail(isbn), 'myRecord'] as const,
  userRecords: (isbn: string) => {
    return [...bookKeys.detail(isbn), 'userRecords'] as const;
  },
  userRecord: (filter: GetBookUserRecordsQueryModel) => {
    const { isbn, ...rest } = filter;
    return [...bookRecordKeys.userRecords(isbn), rest] as const;
  },
  userRecordLike: (isbn: string, recordId: string) =>
    [...bookRecordKeys.userRecords(isbn), 'like', recordId] as const,
  bestRecord: (req: GetBestRecordsQueryModel) => ['bestRecord', req] as const,
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

      if (variables.readingStartDate && variables.readingEndDate) {
        queryClient.invalidateQueries({
          queryKey: bookRecordKeys.userRecords(variables.isbn),
        });
      }
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

      if (variables.readingStartDate && variables.readingEndDate) {
        queryClient.invalidateQueries({
          queryKey: bookRecordKeys.userRecords(variables.isbn),
        });
      }
    },
  });
};

export const useGetBookUserRecords = (req: GetBookUserRecordsQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.userRecord(req),
    queryFn: () => getBookUserRecordsAPI(req),
  });
};

export const useGetTotalLikeForRecord = (
  req: GetTotalLikeForRecordQueryModel,
) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.userRecordLike(req.isbn, req.recordId),
    queryFn: () => getTotalLikeForRecordAPI(req),
  });
};

export const useCreateLikeForRecord = () => {
  return useMutation({
    mutationFn: (req: CreateLikeForRecordQueryModel) =>
      createLikeForRecordAPI(req),
    onMutate: async (variables) => {
      const queryKey = bookRecordKeys.userRecordLike(
        variables.isbn,
        variables.recordId,
      );

      // NOTE: 쿼리 취소
      await queryClient.cancelQueries({ queryKey });

      /*       
        NOTE: getQueryData 함수
              - 쿼리의 캐싱된 데이터를 가져오는 데 사용할 수 있는 동기 함수
              - 쿼리가 존재하지 않으면 undefined를 반환
      */
      const oldData: [GetTotalLikeForRecordServerModel] | undefined =
        queryClient.getQueryData(queryKey);

      if (oldData && oldData.length > 0) {
        const newData = [
          {
            isliked: !oldData[0].isliked,
            count: oldData[0].isliked
              ? oldData[0].count - 1
              : oldData[0].count + 1,
          },
        ];

        /* 
          NOTE: setQueryData 함수
                - 쿼리의 캐시 된 데이터를 즉시 업데이트하는 데 사용할 수 있는 동기 함수
                - 두 번째 인자는 updater 함수인데 해당 함수의 첫 번째 매개변수는 oldData로 기존 데이터를 가져옴
        */
        queryClient.setQueryData(queryKey, newData);
      }

      return { oldData };
    },
    // NOTE: mutation이 실패하면 onMutate에서 반환된 context를 사용하여 롤백 진행
    onError(
      error,
      variables,
      context:
        | {
            oldData: [GetTotalLikeForRecordServerModel] | undefined;
          }
        | undefined,
    ) {
      queryClient.setQueryData(
        bookRecordKeys.userRecordLike(variables.isbn, variables.recordId),
        context?.oldData,
      );
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.userRecordLike(
          variables.isbn,
          variables.recordId,
        ),
      });
    },
  });
};

export const useDeleteLikeForRecord = () => {
  return useMutation({
    mutationFn: (req: DeleteLikeForRecordQueryModel) =>
      deleteLikeForRecordAPI(req),
    onMutate: async (variables) => {
      const queryKey = bookRecordKeys.userRecordLike(
        variables.isbn,
        variables.recordId,
      );

      // NOTE: 쿼리 취소
      await queryClient.cancelQueries({ queryKey });

      /*       
        NOTE: getQueryData 함수
              - 쿼리의 캐싱된 데이터를 가져오는 데 사용할 수 있는 동기 함수
              - 쿼리가 존재하지 않으면 undefined를 반환
      */
      const oldData: [GetTotalLikeForRecordServerModel] | undefined =
        queryClient.getQueryData(queryKey);

      if (oldData && oldData.length > 0) {
        const newData = [
          {
            isliked: !oldData[0].isliked,
            count: oldData[0].isliked
              ? oldData[0].count - 1
              : oldData[0].count + 1,
          },
        ];

        /* 
          NOTE: setQueryData 함수
                - 쿼리의 캐시 된 데이터를 즉시 업데이트하는 데 사용할 수 있는 동기 함수
                - 두 번째 인자는 updater 함수인데 해당 함수의 첫 번째 매개변수는 oldData로 기존 데이터를 가져옴
        */
        queryClient.setQueryData(queryKey, newData);
      }

      return { oldData };
    },
    // NOTE: mutation이 실패하면 onMutate에서 반환된 context를 사용하여 롤백 진행
    onError(
      error,
      variables,
      context:
        | {
            oldData: [GetTotalLikeForRecordServerModel] | undefined;
          }
        | undefined,
    ) {
      queryClient.setQueryData(
        bookRecordKeys.userRecordLike(variables.isbn, variables.recordId),
        context?.oldData,
      );
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: bookRecordKeys.userRecordLike(
          variables.isbn,
          variables.recordId,
        ),
      });
    },
  });
};

export const useGetBestRecords = (req: GetBestRecordsQueryModel) => {
  return useSuspenseQuery({
    queryKey: bookRecordKeys.bestRecord(req),
    queryFn: () => (req.userId ? getBestRecordsAPI(req) : null),
  });
};
