import Skeleton from 'react-loading-skeleton';

import { SkeletonWrapper } from '@/shared/ui';
import * as S from './BookReadingCard.styled';

interface BookReadingCardSkeletonProps {
  className?: string;
}

export const BookReadingCardSkeleton = ({
  className,
}: BookReadingCardSkeletonProps) => {
  return (
    <S.SkeletonCard className={className}>
      <SkeletonWrapper>
        <Skeleton css={S.bookTitleSkeleton} width={100} height={22} />
        <S.BookDescriptionWrapper>
          <Skeleton css={S.bookThumbnailSkeleton} width={75} height={116} />
          <S.BookContentWrapper>
            <Skeleton width={82} height={17} />
            <Skeleton width={45} height={17} />
            <Skeleton width={77} height={16} />
          </S.BookContentWrapper>
        </S.BookDescriptionWrapper>
      </SkeletonWrapper>
    </S.SkeletonCard>
  );
};
