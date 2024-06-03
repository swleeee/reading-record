import Skeleton from 'react-loading-skeleton';

import * as S from './BestCommentaryMobile.styled';

const BestCommentaryMobileSkeleton = () => {
  return (
    <header>
      <S.Title>주간 기록 베스트 10!</S.Title>
      <S.SkeletonWrapper>
        <Skeleton width="85%" height={148} />
      </S.SkeletonWrapper>
    </header>
  );
};

export default BestCommentaryMobileSkeleton;
