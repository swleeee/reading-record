import React from 'react';
import Skeleton from 'react-loading-skeleton';

import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import * as S from './BookRecordList.styled';

const BookRecordListSkeleton = () => {
  return (
    <S.RecordSection>
      <S.RecordHeader>
        <S.RecordTitle>도서 감상 내용</S.RecordTitle>
        <Skeleton width={110} height={40} />
      </S.RecordHeader>
      {Array.from({ length: 5 }, (_, i) => (
        <S.RecordList key={i}>
          <S.RecordItemHeader>
            <S.PersonInfo>
              <Skeleton width={28} height={28} circle />
              <Skeleton width={36} />
              <Skeleton width={28} />
            </S.PersonInfo>
            <S.RatingInfo>
              <Skeleton width={96} />
            </S.RatingInfo>
          </S.RecordItemHeader>
          <S.RecordItemContent>
            <Skeleton width="100%" height={48} />
          </S.RecordItemContent>
          <S.RecordItemFooter>
            <S.LikeButton type="button" onClick={() => {}}>
              <LikeIcon css={S.likeIcon} />
              <S.Like>
                <Skeleton width={16} />
              </S.Like>
            </S.LikeButton>
          </S.RecordItemFooter>
        </S.RecordList>
      ))}
    </S.RecordSection>
  );
};

export default BookRecordListSkeleton;
