import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import {
  DatePicker,
  LabelContent,
  Modal,
  RadioButton,
  SegmentedButton,
  Textarea,
  Tooltip,
} from '@/shared/ui';
import InfoIcon from '@/shared/assets/icon/ic_info.svg?react';
import RatingIcon from '@/shared/assets/icon/ic_rating.svg?react';
import {
  BOOK_READING_STATUS_OPTIONS,
  ERROR_MESSAGE,
  RECORD_CONTENT_PUBLIC_OPTIONS,
} from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';
import { useBookReadingStatusChange } from '../lib/useBookReadingStatusChange';
import * as S from './BookReadingStatusChangeModal.styled';

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);

interface BookReadingStatusChangeModalProps {
  id?: string;
  recordId: string | null;
  readingStatus: SelectOptionType;
  readingStartDateTime: string | null;
  readingEndDateTime: string | null;
  rating: number | null;
  recordContent: string | null;
}

export const BookReadingStatusChangeModal = React.forwardRef<
  HTMLDialogElement,
  BookReadingStatusChangeModalProps
>(
  (
    {
      id,
      recordId,
      readingStatus,
      readingStartDateTime,
      readingEndDateTime,
      rating,
      recordContent,
    },
    ref,
  ) => {
    const {
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
    } = useBookReadingStatusChange({
      id,
      recordId,
      readingStatus,
      readingStartDateTime,
      readingEndDateTime,
      rating,
      recordContent,
    });

    return (
      <Modal
        ref={ref}
        isDisabled={false}
        isLoading={isCreateStatusLoading || isUpdateStatusLoading}
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
        <section>
          <LabelContent
            css={S.labelContent('24px')}
            isRequired={
              watch('readingStatus')?.key === 'pending' ? false : true
            }
            id="readingStatus"
            error={
              errors.readingStartDateTime?.message ||
              errors.readingEndDateTime?.message
            }
            label="독서 기간"
          >
            <S.DatePickerWrapper>
              <DatePicker
                isDisabled={watch('readingStatus')?.key === 'pending'}
                hasError={!!errors.readingStartDateTime}
                selectedDate={watch('readingStartDateTime')}
                placeholder="독서 시작 날짜를 선택하세요."
                selectDate={selectDate('start')}
              />
              <DatePicker
                isDisabled={watch('readingStatus')?.key !== 'completed'}
                hasError={!!errors.readingEndDateTime}
                selectedDate={watch('readingEndDateTime')}
                placeholder="독서 종료 날짜를 선택하세요."
                selectDate={selectDate('end')}
              />
            </S.DatePickerWrapper>
          </LabelContent>
          <LabelContent
            css={S.labelContent('24px')}
            isRequired={
              watch('readingStatus')?.key === 'completed' ? true : false
            }
            id="rating"
            label="평점"
          >
            <S.RatingInfo>
              {Array.from({ length: 5 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  disabled={watch('readingStatus')?.key !== 'completed'}
                  aria-label="select rating"
                  onClick={handleRatingSelect(i)}
                >
                  <RatingIcon
                    css={S.ratingIcon(
                      watch('readingStatus')?.key === 'completed'
                        ? i < (watch('rating') ? watch('rating')! : 1)
                        : false,
                    )}
                  />
                </button>
              ))}
            </S.RatingInfo>
          </LabelContent>
          <LabelContent
            css={S.labelContent('24px')}
            isRequired={
              watch('readingStatus')?.key === 'completed' ? true : false
            }
            id="publicState"
            label="공개 여부"
            tooltip={
              <Tooltip
                content={
                  <S.InfoContent>
                    다른 유저들에게 공개할지에 대한 여부입니다.
                  </S.InfoContent>
                }
                position="topLeft"
              >
                <InfoIcon css={S.infoIcon} />
              </Tooltip>
            }
          >
            <RadioButton
              disabled={watch('readingStatus')?.key !== 'completed'}
              options={RECORD_CONTENT_PUBLIC_OPTIONS}
              selectedOption={watch('publicState')}
              onSelect={handlePublicStateSelect}
            />
          </LabelContent>
          <LabelContent
            isRequired={
              watch('readingStatus')?.key === 'completed' ? true : false
            }
            id="recordContent"
            label="감상문"
            error={errors.recordContent?.message}
          >
            <Textarea
              css={S.recordContent}
              disabled={watch('readingStatus')?.key !== 'completed'}
              hasError={!!errors.recordContent}
              id="recordContent"
              maxLength={1000}
              placeholder="감상문 내용을 입력해주세요."
              value={watch('recordContent') ?? ''}
              register={register('recordContent', {
                required:
                  watch('readingStatus')?.key === 'completed'
                    ? ERROR_MESSAGE.REQUIRED
                    : false,
              })}
            />
          </LabelContent>
        </section>
      </Modal>
    );
  },
);

export default BookReadingStatusChangeModal;

BookReadingStatusChangeModal.displayName = 'BookReadingStatusChangeModal';
