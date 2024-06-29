import Skeleton from 'react-loading-skeleton';

import { SkeletonWrapper } from '@/shared/ui';
import * as S from './BestCommentaryMobile.styled';

const BestCommentaryMobileSkeleton = () => {
  return (
    <header>
      <S.Title>주간 기록 베스트 10!</S.Title>
      <SkeletonWrapper>
        <Skeleton css={S.skeletonStyle} width="85%" height={148} />
      </SkeletonWrapper>
    </header>
  );
};

export default BestCommentaryMobileSkeleton;
