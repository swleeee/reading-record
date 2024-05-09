import React from 'react';

import { BookReadingCardSkeleton } from '@/components';
import * as S from './ReadingBookDesktop.styled';

const ReadingBookDesktopSkeleton = () => {
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

export default ReadingBookDesktopSkeleton;
