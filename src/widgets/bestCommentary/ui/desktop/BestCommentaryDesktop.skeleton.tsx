import Skeleton from 'react-loading-skeleton';

import { SkeletonWrapper } from '@/shared/ui';
import * as S from './BestCommentaryDesktop.styled';

const BestCommentaryDesktopSkeleton = () => {
  return (
    <S.BestCommentarySection>
      <header>
        <S.Title>주간 기록 베스트 10!</S.Title>
      </header>
      <S.BestCommentaryCardWrapper>
        {Array.from({ length: 4 }, (_, i) => (
          <SkeletonWrapper key={i}>
            <Skeleton width={360} height={148} />
          </SkeletonWrapper>
        ))}
      </S.BestCommentaryCardWrapper>
    </S.BestCommentarySection>
  );
};

export default BestCommentaryDesktopSkeleton;
