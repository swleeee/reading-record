import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { ErrorMessage, Modal, SegmentedButton, Textarea } from '@/components';
import { useModal, useToast } from '@/hooks';
import { BOOK_READING_STATUS_OPTIONS, ERROR_MSG, TOAST } from '@/assets';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import type { SelectOptionType } from '@/types';
import * as S from './BookReadingStatusChangeModal.styled';

type Form = {
  readingStartDateTime: string | null;
  readingEndDateTime: string | null;
  rating: number | null;
  recordContent: string | null;
};

interface BookReadingStatusChangeModalProps {
  readingStatus: string;
}

const BookReadingStatusChangeModal = React.forwardRef<
  HTMLDialogElement,
  BookReadingStatusChangeModalProps
>(({ readingStatus }, ref) => {
  const [isModalShow, setIsModalShow] = useState(true);
  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    null,
  );

  const {
    formState: { errors },
    watch,
    register,
    setValue,
    handleSubmit,
  } = useForm<Form>({
    mode: 'onTouched',
  });

  const { addToast } = useToast();
  const { closeModal } = useModal(setIsModalShow);

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setSelectedOption(option);
  };

  const handleRatingMouseEnter = (index: number) => () => {
    setValue('rating', index);
  };

  // TODO: 추후 작성 예정
  const handleReadingStatusChange = handleSubmit(() => {
    /*
      NOTE: 상황별 토스트
      1. '읽기 전', '읽기 중' -> '읽기 완료' (TOAST.SUCCESS.UPDATE_READING_PENDING_STATUS) 
      2. '읽기 전' -> '읽기 중' (TOAST.SUCCESS.UPDATE_READING_ONGOING_STATUS)
      3. '읽기 중' -> '읽기 전' (TOAST.SUCCESS.UPDATE_READING_PENDING_STATUS)
      4. '읽기 완료' -> '읽기 전' or '읽기 중' (TOAST.WARNING.UPDATE_READING_STATUS)
    */
    addToast(TOAST.SUCCESS.UPDATE_READING_COMPLETED_STATUS);
    closeModal();
  });

  useEffect(() => {
    const initReadingStatusOption = BOOK_READING_STATUS_OPTIONS.find(
      (option) => option.key === readingStatus,
    );

    setSelectedOption(
      initReadingStatusOption ?? BOOK_READING_STATUS_OPTIONS[0],
    );
  }, []);

  return (
    <Modal
      ref={ref}
      isShow={isModalShow}
      isDisabled={false}
      activeButtonName="변경"
      closeButtonName="닫기"
      title="도서 읽기 상태 변경"
      closeFn={closeModal}
      activeFn={handleReadingStatusChange}
    >
      <section>
        <SegmentedButton
          css={S.readingStatusButtonGroup}
          options={BOOK_READING_STATUS_OPTIONS}
          selectedOption={selectedOption}
          onClick={handleOptionSelect}
        />
        <S.Item marginBottom="24px">
          <S.Label
            isRequired={selectedOption?.key === 'pending' ? false : true}
          >
            독서 기간
          </S.Label>
          <div>
            <span>캘린더-1</span>
            <span>캘린더-2</span>
          </div>
        </S.Item>
        <S.Item marginBottom="24px">
          <S.Label
            isRequired={selectedOption?.key === 'completed' ? true : false}
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
        </S.Item>
        <S.Item>
          <S.Label
            isRequired={selectedOption?.key === 'completed' ? true : false}
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
              required: ERROR_MSG.REQUIRED,
            })}
          />
          {errors.recordContent?.message && (
            <ErrorMessage message={errors.recordContent.message} />
          )}
        </S.Item>
      </section>
    </Modal>
  );
});

export default BookReadingStatusChangeModal;

BookReadingStatusChangeModal.displayName = 'BookReadingStatusChangeModal';
