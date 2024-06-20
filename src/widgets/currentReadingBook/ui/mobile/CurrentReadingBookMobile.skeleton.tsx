import { BookReadingCardSkeleton } from '@/entities/record';
import * as S from './CurrentReadingBookMobile.styled';

const CurrentReadingBookMobileSkeleton = () => {
  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      <S.SkeletonCardWrapper>
        {Array.from({ length: 3 }, (_, i) => (
          <BookReadingCardSkeleton key={i} />
        ))}
      </S.SkeletonCardWrapper>
    </S.ReadingBookSection>
  );
};

export default CurrentReadingBookMobileSkeleton;
