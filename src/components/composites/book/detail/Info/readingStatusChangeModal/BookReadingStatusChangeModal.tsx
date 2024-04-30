import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

import { useUser } from '@/contexts';
import {
  DatePicker,
  ErrorMessage,
  Modal,
  SegmentedButton,
  Textarea,
} from '@/components';
import { useModal, useToast } from '@/hooks';
import { useUpdateBookRecordStatus } from '@/services';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import {
  BOOK_READING_STATUS_OPTIONS,
  ERROR_MESSAGE,
  TOAST_MESSAGE,
} from '@/constants';
import type {
  SelectOptionType,
  UpdateBookRecordStateQueryModel,
} from '@/types';
import * as S from './BookReadingStatusChangeModal.styled';

type Form = {
  readingStatus: SelectOptionType | null;
  readingStartDateTime: Dayjs | null;
  readingEndDateTime: Dayjs | null;
  rating: number | null;
  recordContent: string | null;
};

interface BookReadingStatusChangeModalProps {
  id?: string;
  readingStatus: string;
}

const BookReadingStatusChangeModal = React.forwardRef<
  HTMLDialogElement,
  BookReadingStatusChangeModalProps
>(({ id, readingStatus }, ref) => {
  const isbn = id ? id.split(' ').filter((item) => item)[0] : '';
  console.log(id, isbn);

  const {
    formState: { errors },
    watch,
    register,
    setValue,
    handleSubmit,
  } = useForm<Form>({
    mode: 'onTouched',
  });

  const { isPending: isUpdateStatusLoading, mutate: updateBookRecordStatus } =
    useUpdateBookRecordStatus();
  const { user } = useUser();
  const { addToast } = useToast();
  const { closeModal } = useModal();

  const selectDate = (type: 'start' | 'end') => (date: Dayjs) => {
    if (type === 'start') {
      setValue('readingStartDateTime', date);
    }

    if (type === 'end') {
      setValue('readingEndDateTime', date);
    }
  };

  const makeData = (data: Form) => {
    if (data.readingStatus?.key === 'pending') {
      return {
        rating: null,
        readingStartDate: null,
        readingEndDate: null,
        recordComment: null,
      };
    }
    if (data.readingStatus?.key === 'ongoing') {
      return {
        rating: null,
        readingStartDate: data.readingStartDateTime!.utc().format(),
        readingEndDate: null,
        recordComment: null,
      };
    }

    return {
      rating: data.rating,
      readingStartDate: data.readingStartDateTime!.utc().format(),
      readingEndDate: data.readingEndDateTime!.utc().format(),
      recordComment: data.recordContent,
    };
  };

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setValue('readingStatus', option);
  };

  const handleRatingMouseEnter = (index: number) => () => {
    setValue('rating', index);
  };

  const handleReadingStatusChange = handleSubmit((data) => {
    const req: UpdateBookRecordStateQueryModel = {
      userId: user?.id!,
      isbn,
      ...makeData(data),
    };

    updateBookRecordStatus(req, {
      onSuccess: () => {
        addToast(TOAST_MESSAGE.SUCCESS.UPDATE_READING_COMPLETED_STATUS);
        closeModal();
      },
    });

    /*
      NOTE: 상황별 토스트
      1. '읽기 전', '읽기 중' -> '읽기 완료' (TOAST.SUCCESS.UPDATE_READING_PENDING_STATUS) 
      2. '읽기 전' -> '읽기 중' (TOAST.SUCCESS.UPDATE_READING_ONGOING_STATUS)
      3. '읽기 중' -> '읽기 전' (TOAST.SUCCESS.UPDATE_READING_PENDING_STATUS)
      4. '읽기 완료' -> '읽기 전' or '읽기 중' (TOAST.WARNING.UPDATE_READING_STATUS)
    */
  });

  useEffect(() => {
    const initReadingStatusOption = BOOK_READING_STATUS_OPTIONS.find(
      (option) => option.key === readingStatus,
    );

    setValue(
      'readingStatus',
      initReadingStatusOption ?? BOOK_READING_STATUS_OPTIONS[0],
    );
  }, []);

  return (
    <Modal
      ref={ref}
      isDisabled={false}
      isLoading={isUpdateStatusLoading}
      activeButtonName="변경"
      closeButtonName="닫기"
      title="도서 읽기 상태 변경"
      closeFn={closeModal}
      activeFn={handleReadingStatusChange}
    >
      <SegmentedButton
        css={S.readingStatusButtonGroup}
        options={BOOK_READING_STATUS_OPTIONS}
        selectedOption={watch('readingStatus')}
        onClick={handleOptionSelect}
      />
      <S.DataSection>
        {watch('readingStatus')?.key === 'pending' ? (
          // TODO: 도서 '읽기 전' 상태일 때 하기와 같이 문구 임시 노출 (추후 수정 필요)
          <S.EmptyDataWrapper>
            <p>책을 한 번 읽어보세요 :)</p>
          </S.EmptyDataWrapper>
        ) : (
          <>
            <S.DataWrapper marginBottom="24px">
              <S.Label
                isRequired={
                  watch('readingStatus')?.key === 'pending' ? false : true
                }
              >
                독서 기간
              </S.Label>
              <S.DatePickerWrapper>
                <DatePicker
                  selectedDate={watch('readingStartDateTime')}
                  placeholder="독서 시작 날짜를 선택하세요."
                  selectDate={selectDate('start')}
                />
                <DatePicker
                  isDisabled={watch('readingStatus')?.key === 'ongoing'}
                  selectedDate={watch('readingEndDateTime')}
                  placeholder="독서 종료 날짜를 선택하세요."
                  selectDate={selectDate('end')}
                />
              </S.DatePickerWrapper>
            </S.DataWrapper>
            {watch('readingStatus')?.key === 'completed' && (
              <S.DataWrapper marginBottom="24px">
                <S.Label
                  isRequired={
                    watch('readingStatus')?.key === 'completed' ? true : false
                  }
                >
                  평점
                </S.Label>
                <S.RatingInfo>
                  {Array.from({ length: 5 }, (_, i) => (
                    <RatingIcon
                      key={i}
                      css={S.ratingIcon(
                        i - 1 < (watch('rating') ? watch('rating')! : 0),
                      )}
                      onMouseEnter={handleRatingMouseEnter(i)}
                    />
                  ))}
                </S.RatingInfo>
              </S.DataWrapper>
            )}
            {watch('readingStatus')?.key === 'completed' && (
              <S.DataWrapper>
                <S.Label
                  isRequired={
                    watch('readingStatus')?.key === 'completed' ? true : false
                  }
                  htmlFor="recordContent"
                >
                  감상문
                </S.Label>
                <Textarea
                  css={S.recordContent}
                  hasError={!!errors.recordContent}
                  id="recordContent"
                  maxLength={1000}
                  placeholder="감상문 내용을 입력해주세요."
                  value={watch('recordContent') ?? ''}
                  register={register('recordContent', {
                    required: ERROR_MESSAGE.REQUIRED,
                  })}
                />
                {errors.recordContent?.message && (
                  <ErrorMessage message={errors.recordContent.message} />
                )}
              </S.DataWrapper>
            )}
          </>
        )}
      </S.DataSection>
    </Modal>
  );
});

export default BookReadingStatusChangeModal;

BookReadingStatusChangeModal.displayName = 'BookReadingStatusChangeModal';
