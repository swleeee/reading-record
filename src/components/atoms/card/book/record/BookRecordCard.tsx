import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { useUser } from '@/contexts';
import { LikeButton, Profile } from '@/components';
import { useModal, useToast } from '@/hooks';
import { deviceState } from '@/stores';
import { PATH, TOAST_MESSAGE } from '@/constants';
import type { GetBestRecordsServerModel } from '@/types';
import BookRecordDetailModal from './modal/BookRecordDetailModal';
import * as S from './BookRecordCard.styled';

interface BookRecordCardProps {
  bookRecord: GetBestRecordsServerModel[number];
}

const BookRecordCard = ({ bookRecord }: BookRecordCardProps) => {
  const navigate = useNavigate();

  const { user } = useUser();
  const device = useRecoilValue(deviceState);

  const { modalRef, openModal } = useModal();
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
