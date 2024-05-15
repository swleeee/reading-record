import React from 'react';

import { BookRecordListSkeleton } from './list';
import * as S from './BookRecord.styled';

const BookRecordSkeleton = () => {
  return (
    <S.Container>
      <BookRecordListSkeleton />
    </S.Container>
  );
};

export default BookRecordSkeleton;
