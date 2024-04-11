import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import type { GetBooksServerModel } from '@/types';
import BookDetailInfoDesktop from './desktop/BookDetailInfoDesktop';
import BookDetailInfoMobile from './mobile/BookDetailInfoMobile';

interface BookInfoContentProps {
  book: GetBooksServerModel['documents'][number];
}

const BookDetailInfo = ({ book }: BookInfoContentProps) => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? (
    <BookDetailInfoMobile book={book} />
  ) : (
    <BookDetailInfoDesktop book={book} />
  );
};

export default BookDetailInfo;
