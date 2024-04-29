import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import * as S from './BookListCard.styled';

const BookListCardSkeleton = () => {
  return (
    <div css={S.bookDetailLink}>
      <S.Header>
        <S.ReadingStatus>
          <Skeleton width={60} />
        </S.ReadingStatus>
        <S.RatingWrapper>
          <RatingIcon css={S.ratingIcon} />
          <Skeleton width={30} />
        </S.RatingWrapper>
      </S.Header>
      <S.Main>
        <Skeleton width={130} height="100%" />
        <S.SkeletonContent>
          <Skeleton width={100} height={19.5} />
          <Skeleton width={120} height={16.11} />
          <Skeleton width={60} height={19.6} />
          <Skeleton inline width="100%" height={101.41} />
        </S.SkeletonContent>
      </S.Main>
    </div>
  );
};

export default BookListCardSkeleton;
