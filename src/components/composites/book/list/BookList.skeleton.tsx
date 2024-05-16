import React from 'react';

import { BookListCardSkeleton } from '@/components';
import * as S from './BookList.styled';

const BookListSkeleton = () => {
  return (
    <S.Container>
      {Array.from({ length: 10 }, (_, i) => (
        <BookListCardSkeleton key={i} />
      ))}
    </S.Container>
  );
};

export default BookListSkeleton;
