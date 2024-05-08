import React from 'react';

import { BookAddLink, BookReadingCard } from '@/components';
import type { GetMyLibraryServerModel } from '@/types';
import * as S from './ReadingBookDesktop.styled';

interface ReadingBookDesktopProps {
  books?: GetMyLibraryServerModel['records'];
}

const ReadingBookDesktop = ({ books }: ReadingBookDesktopProps) => {
  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      {books?.length ? (
        <S.BookReadingCardWrapper>
          {books.map((book) => (
            <BookReadingCard css={S.card} key={book.id} {...book} />
          ))}
        </S.BookReadingCardWrapper>
      ) : (
        <BookAddLink />
      )}
    </S.ReadingBookSection>
  );
};

export default ReadingBookDesktop;
