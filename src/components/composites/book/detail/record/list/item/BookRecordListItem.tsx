import React from 'react';
import { useParams } from 'react-router-dom';

import { useUser } from '@/contexts';
import { Profile } from '@/components';
import {
  useCreateLikeForRecord,
  useDeleteLikeForRecord,
  useGetTotalLikeForRecord,
} from '@/services';
import { getFirstIsbnSegment } from '@/utils';
import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import LikeFilledIcon from '@/assets/icon/ic_thumb_up_filled.svg?react';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import type { GetBookUserRecordsServerModel } from '@/types';
import * as S from './BookRecordListItem.styled';

interface BookRecordListItemProps {
  record: GetBookUserRecordsServerModel['records'][number];
}

const BookRecordListItem = ({ record }: BookRecordListItemProps) => {
  const { id } = useParams();

  const { user } = useUser();
  const isbn = getFirstIsbnSegment(id);
  const userId = user?.id!;
  const req = { isbn, userId, recordId: record.id };

  const { data } = useGetTotalLikeForRecord(req);
  const { mutate: createLikeRecord } = useCreateLikeForRecord();
  const { mutate: deleteLikeRecord } = useDeleteLikeForRecord();

  const handleLikeButtonClick = (recordId: string) => () => {
    const req = { recordId, userId, isbn };

    data[0].isliked ? deleteLikeRecord(req) : createLikeRecord(req);
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
        <S.LikeButton
          disabled={userId === record.user_id}
          type="button"
          onClick={handleLikeButtonClick(record.id)}
        >
          {data[0].isliked ? (
            <LikeFilledIcon css={S.likeIcon} />
          ) : (
            <LikeIcon css={S.likeIcon} />
          )}
          <S.Like>{data[0].count}</S.Like>
        </S.LikeButton>
      </S.RecordItemFooter>
    </S.RecordItemContainer>
  );
};

export default BookRecordListItem;
