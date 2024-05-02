import React from 'react';

import { useUser } from '@/contexts';
import { Profile } from '@/components';
import { useCreateLikeForRecord } from '@/services';
import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import type { GetBookUserRecordsServerModel } from '@/types';
import * as S from './BookRecordListItem.styled';

interface BookRecordListItemProps {
  record: GetBookUserRecordsServerModel['records'][number];
}

const BookRecordListItem = ({ record }: BookRecordListItemProps) => {
  const { user } = useUser();

  const { mutate: createLikeRecord } = useCreateLikeForRecord();

  const handleLikeButtonClick = (recordId: string) => () => {
    const req = { recordId, userId: user?.id! };

    createLikeRecord(req);
  };

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
        <S.LikeButton type="button" onClick={handleLikeButtonClick(record.id)}>
          <LikeIcon css={S.likeIcon} />
          <S.Like>{record.like_count}</S.Like>
        </S.LikeButton>
      </S.RecordItemFooter>
    </S.RecordItemContainer>
  );
};

export default BookRecordListItem;
