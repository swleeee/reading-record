import { BookReadingCardSkeleton } from '@/entities/record';
import * as S from './CurrentReadingBookDesktop.styled';

const CurrentReadingBookDesktopSkeleton = () => {
  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      <S.BookReadingCardWrapper>
        {Array.from({ length: 3 }, (_, i) => (
          <BookReadingCardSkeleton key={i} css={S.card} />
        ))}
      </S.BookReadingCardWrapper>
    </S.ReadingBookSection>
  );
};

export default CurrentReadingBookDesktopSkeleton;
