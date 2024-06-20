import { useForm } from 'react-hook-form';
import dayjs, { type Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  useCreateBookRecord,
  useUpdateBookRecord,
  type CreateBookRecordQueryModel,
} from '@/entities/record';
import { useUser, useModal, useToast } from '@/shared/lib';
import {
  BOOK_READING_STATUS_OPTIONS,
  ERROR_MESSAGE,
  RECORD_CONTENT_PUBLIC_OPTIONS,
  TOAST_MESSAGE,
} from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);

type Form = {
  publicState: SelectOptionType;
  readingStatus: SelectOptionType | null;
  readingStartDateTime: Dayjs | null;
  readingEndDateTime: Dayjs | null;
  rating: number | null;
  recordContent: string | null;
};

interface useBookReadingStatusChangeParams {
  id?: string;
  recordId: string | null;
  readingStatus: SelectOptionType;
  readingStartDateTime: string | null;
  readingEndDateTime: string | null;
  rating: number | null;
  recordContent: string | null;
}

export const useBookReadingStatusChange = ({
  id,
  recordId,
  readingStatus,
  readingStartDateTime,
  readingEndDateTime,
  rating,
  recordContent,
}: useBookReadingStatusChangeParams) => {
  const {
    formState: { errors },
    watch,
    register,
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<Form>({
    mode: 'onTouched',
    defaultValues: {
      publicState: RECORD_CONTENT_PUBLIC_OPTIONS[0],
      readingStatus,
      readingStartDateTime: readingStartDateTime
        ? dayjs(readingStartDateTime)
        : null,
      readingEndDateTime: readingEndDateTime ? dayjs(readingEndDateTime) : null,
      rating: rating ?? 1,
      recordContent,
    },
  });

  const { isPending: isCreateStatusLoading, mutate: createBookRecordStatus } =
    useCreateBookRecord();
  const { isPending: isUpdateStatusLoading, mutate: updateBookRecordStatus } =
    useUpdateBookRecord();
  const { user } = useUser();
  const { addToast } = useToast();
  const { closeModal } = useModal();

  const selectDate = (type: 'start' | 'end') => (date: Dayjs) => {
    if (type === 'start') {
      setValue('readingStartDateTime', date);

      if (dayjs.isDayjs(watch('readingEndDateTime'))) {
        if (errors.readingStartDateTime?.type === 'required') {
          clearErrors('readingStartDateTime');
          return;
        }

        if (date.isSameOrBefore(watch('readingEndDateTime'))) {
          clearErrors('readingStartDateTime');
          clearErrors('readingEndDateTime');
        }

        return;
      }
      clearErrors('readingStartDateTime');
    }

    if (type === 'end') {
      setValue('readingEndDateTime', date);

      if (dayjs.isDayjs(watch('readingStartDateTime'))) {
        if (errors.readingEndDateTime?.type === 'required') {
          clearErrors('readingEndDateTime');
          return;
        }

        if (watch('readingStartDateTime')?.isSameOrBefore(date)) {
          clearErrors('readingStartDateTime');
          clearErrors('readingEndDateTime');
        }

        return;
      }
      clearErrors('readingEndDateTime');
    }
  };

  const makeData = (data: Form) => {
    if (data.readingStatus?.key === 'pending') {
      return {
        isPublic: false,
        rating: null,
        readingStartDate: null,
        readingEndDate: null,
        recordComment: null,
      };
    }
    if (data.readingStatus?.key === 'ongoing') {
      return {
        isPublic: false,
        rating: null,
        readingStartDate: data.readingStartDateTime!.utc().format(),
        readingEndDate: null,
        recordComment: null,
      };
    }

    return {
      isPublic: data.publicState.key === 'public' ? true : false,
      rating: data.rating,
      readingStartDate: data.readingStartDateTime!.utc().format(),
      readingEndDate: data.readingEndDateTime!.utc().format(),
      recordComment: data.recordContent,
    };
  };

  const getToastMessageByStatus = (
    readingStatus: (typeof BOOK_READING_STATUS_OPTIONS)[number]['key'],
  ) => {
    switch (readingStatus) {
      case 'pending':
        return TOAST_MESSAGE.SUCCESS.UPDATE_READING_PENDING_STATUS;

      case 'ongoing':
        return TOAST_MESSAGE.SUCCESS.UPDATE_READING_ONGOING_STATUS;

      case 'completed':
        return TOAST_MESSAGE.SUCCESS.UPDATE_READING_COMPLETED_STATUS;
    }

    return null;
  };

  /*
    NOTE: 상황별 토스트
    1. '읽기 전', '읽기 중' -> '읽기 완료' (TOAST_MESSAGE.SUCCESS.UPDATE_READING_PENDING_STATUS) 
    2. '읽기 전' -> '읽기 중' (TOAST_MESSAGE.SUCCESS.UPDATE_READING_ONGOING_STATUS)
    3. '읽기 중' -> '읽기 전' (TOAST_MESSAGE.SUCCESS.UPDATE_READING_PENDING_STATUS)
    4. 같은 상태로 업데이트 (TOAST_MESSAGE.SUCCSS.UPDATE_RECORD_CONTENT)
    5. '읽기 완료' -> '읽기 전' or '읽기 중' (TOAST_MESSAGE.WARNING.UPDATE_READING_STATUS)    
  */
  const getToastMessage = (
    recordId: string | null,
    originReadingStatus: SelectOptionType,
    newReadingStatus: SelectOptionType,
  ) => {
    // NOTE: 첫 독서 기록 생성
    if (!recordId) {
      return getToastMessageByStatus(newReadingStatus.key);
    }

    // NOTE: 독서 기록 업데이트
    if (originReadingStatus.key === newReadingStatus.key) {
      return TOAST_MESSAGE.SUCCESS.UPDATE_RECORD_CONTENT;
    }

    return getToastMessageByStatus(newReadingStatus.key);
  };

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setValue('readingStatus', option);
    clearErrors();
  };

  const handleRatingSelect = (index: number) => () => {
    setValue('rating', index + 1);
  };

  const checkDateRequiredError = () => {
    let hasError = false;

    if (
      watch('readingStatus')?.key === 'ongoing' &&
      !dayjs.isDayjs(watch('readingStartDateTime'))
    ) {
      setError('readingStartDateTime', {
        type: 'required',
        message: ERROR_MESSAGE.REQUIRED,
      });

      hasError = true;
    }

    if (watch('readingStatus')?.key === 'completed') {
      if (!dayjs.isDayjs(watch('readingStartDateTime'))) {
        setError('readingStartDateTime', {
          type: 'required',
          message: ERROR_MESSAGE.REQUIRED,
        });

        hasError = true;
      }

      if (!dayjs.isDayjs(watch('readingEndDateTime'))) {
        setError('readingEndDateTime', {
          type: 'required',
          message: ERROR_MESSAGE.REQUIRED,
        });

        hasError = true;
      }
    }

    return hasError;
  };

  const handlePublicStateSelect = (option: SelectOptionType) => () => {
    setValue('publicState', option);
  };

  const handleReadingStatusChange = handleSubmit(
    (data) => {
      if (checkDateRequiredError()) {
        return;
      }

      const req: CreateBookRecordQueryModel = {
        userId: user?.id!,
        isbn: id!,
        ...makeData(data),
      };

      const toastMessage = getToastMessage(
        recordId,
        readingStatus,
        data.readingStatus!,
      );

      if (recordId) {
        updateBookRecordStatus(
          { ...req, recordId },
          {
            onSuccess: () => {
              if (toastMessage) {
                addToast(toastMessage);
              }

              closeModal();
            },
            onError: (error) => {
              switch (error.message) {
                case 'CANNOT_UPDATE_READING_COMPLETE_STATUS':
                  addToast(TOAST_MESSAGE.WARNING.UPDATE_READING_STATUS);
                  break;

                // TODO: 추가 예정
                case 'CANNOT_END_DATE_BEFORE_THAN_START_DATE':
                  setError('readingEndDateTime', {
                    type: 'validate',
                    message: ERROR_MESSAGE.START_DATE_BEFORE_THAN_END_DATE,
                  });
                  setError('readingStartDateTime', {
                    type: 'validate',
                    message: ERROR_MESSAGE.START_DATE_BEFORE_THAN_END_DATE,
                  });
                  addToast(
                    TOAST_MESSAGE.WARNING.END_DATE_BEFORE_THAN_START_DATE,
                  );
                  break;
              }
            },
          },
        );
        return;
      }

      createBookRecordStatus(req, {
        onSuccess: () => {
          if (toastMessage) {
            addToast(toastMessage);
          }

          closeModal();
        },
      });
    },
    () => {
      checkDateRequiredError();
    },
  );

  return {
    isCreateStatusLoading,
    isUpdateStatusLoading,
    errors,
    watch,
    register,
    closeModal,
    selectDate,
    handleOptionSelect,
    handleRatingSelect,
    handlePublicStateSelect,
    handleReadingStatusChange,
  };
};
