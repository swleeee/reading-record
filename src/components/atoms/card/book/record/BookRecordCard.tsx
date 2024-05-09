import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { LikeButton, Profile } from '@/components';
import { useModal } from '@/hooks';
import { deviceState } from '@/stores';
import type { GetBestRecordsServerModel } from '@/types';
import BookRecordDetailModal from './modal/BookRecordDetailModal';
import * as S from './BookRecordCard.styled';

interface BookRecordCardProps {
  bookRecord: GetBestRecordsServerModel[number];
}

const BookRecordCard = ({ bookRecord }: BookRecordCardProps) => {
  const navigate = useNavigate();

  const device = useRecoilValue(deviceState);

  const { modalRef, openModal } = useModal();

  return (
    <button
      type="button"
      css={S.bookRecordCard}
      onClick={openModal(
        <BookRecordDetailModal
          ref={modalRef}
          bookRecord={bookRecord}
          navigate={navigate}
        />,
      )}
    >
      <S.BookCoverImg src={bookRecord.thumbnail} />
      <S.BookRecordInfo>
        <S.Header>
          <Profile src={bookRecord.profile_url} />
          <S.UserName>{bookRecord.nickname}</S.UserName>
          <S.CreatedDate>
            {dayjs(bookRecord.created_at).format('YYYY-MM-DD')}
          </S.CreatedDate>
          <LikeButton
            as="div"
            isbn={bookRecord.isbn}
            recordId={bookRecord.id}
            userId={bookRecord.user_id}
          />
        </S.Header>
        <S.RecordContent device={device}>
          {bookRecord.record_comment}
        </S.RecordContent>
      </S.BookRecordInfo>
    </button>
  );
};

export default BookRecordCard;
