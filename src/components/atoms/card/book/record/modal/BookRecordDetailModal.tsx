import React, { Suspense } from 'react';
import type { NavigateFunction } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import Skeleton from 'react-loading-skeleton';

import { Button, LikeButton, Modal, Profile } from '@/components';
import { useModal } from '@/hooks';
import { deviceState } from '@/stores';
import type { GetBestRecordsServerModel } from '@/types';
import * as S from './BookRecordDetailModal.styled';

interface BookRecordDetailModalProps {
  bookRecord: GetBestRecordsServerModel[number];
  navigate: NavigateFunction;
}

const BookRecordDetailModal = React.forwardRef<
  HTMLDialogElement,
  BookRecordDetailModalProps
>(({ bookRecord, navigate }, ref) => {
  const device = useRecoilValue(deviceState);

  const { closeModal } = useModal();

  const handleButtonClick = (isbn: string) => () => {
    navigate(`book/${isbn}`);
    closeModal();
  };

  return (
    <Modal
      ref={ref}
      title="독서 기록 상세"
      closeButtonName="닫기"
      closeFn={closeModal}
    >
      <S.Container>
        {device !== 'mobile' && (
          <S.BookContentWrapper>
            <S.BookCoverImg src={bookRecord.thumbnail} alt="도서 썸네일" />
            <Button
              label="상세화면 보기"
              sizeType="sm"
              styleType="tertiary"
              onClick={handleButtonClick(bookRecord.isbn)}
            />
          </S.BookContentWrapper>
        )}
        <S.ContentWrapper>
          <S.UserInfoWrapper>
            <Profile src={bookRecord.profile_url} />
            <S.UserName>{bookRecord.nickname}</S.UserName>
            <S.CreatedDate>
              {dayjs(bookRecord.created_at).format('YYYY-MM-DD')}
            </S.CreatedDate>
          </S.UserInfoWrapper>
          <S.RecordContent>{bookRecord.record_comment}</S.RecordContent>
          <S.BottomWrapper>
            {device === 'mobile' && (
              <Button
                label="상세화면 보기"
                sizeType="sm"
                styleType="tertiary"
                onClick={handleButtonClick(bookRecord.isbn)}
              />
            )}
            <Suspense fallback={<Skeleton width={30} height={17} />}>
              <LikeButton
                isbn={bookRecord.isbn}
                recordId={bookRecord.id}
                userId={bookRecord.user_id}
              />
            </Suspense>
          </S.BottomWrapper>
        </S.ContentWrapper>
      </S.Container>
    </Modal>
  );
});

export default BookRecordDetailModal;

BookRecordDetailModal.displayName = 'BookRecordDetailModal';
