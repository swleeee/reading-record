import React from 'react';

import { LikeButton, Profile } from '@/components';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import type { GetBookUserRecordsServerModel } from '@/types';
import * as S from './BookRecordListItem.styled';

interface BookRecordListItemProps {
  record: GetBookUserRecordsServerModel['records'][number];
}

const BookRecordListItem = ({ record }: BookRecordListItemProps) => {
  return (
    <S.RecordItemContainer key={record.id}>
      <S.RecordItemHeader>
        <S.PersonInfo>
          <Profile src={record.users.profile_url} />
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
        <LikeButton
          isbn={record.isbn}
          recordId={record.id}
          userId={record.user_id}
        />
      </S.RecordItemFooter>
    </S.RecordItemContainer>
  );
};

export default BookRecordListItem;
