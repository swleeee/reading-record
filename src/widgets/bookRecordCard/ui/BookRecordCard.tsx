import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { LikeRecord } from '@/features/like-record';
import { useGetUserProfile } from '@/entities/auth';
import type { GetBestRecordsServerModel } from '@/entities/record';
import { Profile } from '@/shared/ui';
import { useUser, useModal, useToast } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import { PATH, TOAST_MESSAGE } from '@/shared/constants';
import BookRecordDetailModal from './modal/BookRecordDetailModal';
import * as S from './BookRecordCard.styled';

interface BookRecordCardProps {
  bookRecord: GetBestRecordsServerModel[number];
}

export const BookRecordCard = ({ bookRecord }: BookRecordCardProps) => {
  const navigate = useNavigate();

  const { user } = useUser();
  const device = useRecoilValue(deviceState);

  const { modalRef, openModal } = useModal();
  const { data } = useGetUserProfile(bookRecord.profile_url);
  const { addToast } = useToast();

  const handleButtonClick = () => {
    if (user?.id) {
      openModal(
        <BookRecordDetailModal
          ref={modalRef}
          bookRecord={bookRecord}
          navigate={navigate}
        />,
      )();
      return;
    }

    addToast(TOAST_MESSAGE.INFO.LOGIN);
    navigate(PATH.LOGIN);
  };

  return (
    <button type="button" css={S.bookRecordCard} onClick={handleButtonClick}>
      <S.BookCoverImg src={bookRecord.thumbnail} alt="book thumbnail" />
      <S.BookRecordInfo>
        <S.Header>
          <Profile src={data} />
          <S.UserName>{bookRecord.nickname}</S.UserName>
          <S.CreatedDate>
            {dayjs(bookRecord.created_at).format('YYYY-MM-DD')}
          </S.CreatedDate>
          <LikeRecord
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
