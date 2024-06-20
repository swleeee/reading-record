import { LikeRecord } from '@/features/like-record';
import { useGetUserProfile } from '@/entities/auth';
import type { GetBookUserRecordsServerModel } from '@/entities/record';
import { Profile } from '@/shared/ui';
import RatingIcon from '@/shared/assets/icon/ic_rating.svg?react';
import * as S from './BookRecordListItem.styled';

interface BookRecordListItemProps {
  record: GetBookUserRecordsServerModel['records'][number];
}

const BookRecordListItem = ({ record }: BookRecordListItemProps) => {
  const { data: profileUrl } = useGetUserProfile(record.users.profile_url);

  return (
    <S.RecordItemContainer key={record.id}>
      <S.RecordItemHeader>
        <S.PersonInfo>
          <Profile src={profileUrl} />
          <S.UserName>{record.users.nickname}</S.UserName>
          <S.CreatedDate>{record.created_at.split('T')[0]}</S.CreatedDate>
        </S.PersonInfo>
        <S.RatingInfo>
          {Array.from({ length: 5 }, (_, i) => (
            <RatingIcon key={i} css={S.ratingIcon(i < (record.rating ?? 0))} />
          ))}
        </S.RatingInfo>
      </S.RecordItemHeader>
      <S.RecordItemContent>{record.record_comment}</S.RecordItemContent>
      <S.RecordItemFooter>
        <LikeRecord
          isbn={record.isbn}
          recordId={record.id}
          userId={record.user_id}
        />
      </S.RecordItemFooter>
    </S.RecordItemContainer>
  );
};

export default BookRecordListItem;
