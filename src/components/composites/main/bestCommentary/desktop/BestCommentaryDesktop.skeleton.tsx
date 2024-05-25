import Skeleton from 'react-loading-skeleton';

import * as S from './BestCommentaryDesktop.styled';

const BestCommentaryDesktopSkeleton = () => {
  return (
    <S.BestCommentarySection>
      <header>
        <S.Title>주간 기록 베스트 10!</S.Title>
      </header>
      <S.BestCommentaryCardWrapper>
        {Array.from({ length: 4 }, (_, i) => (
          <Skeleton key={i} width={360} height={148} />
        ))}
      </S.BestCommentaryCardWrapper>
    </S.BestCommentarySection>
  );
};

export default BestCommentaryDesktopSkeleton;
