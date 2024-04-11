import React from 'react';

import type { GetBooksServerModel } from '@/types';

interface BookDetailInfoDesktopProps {
  book: GetBooksServerModel['documents'][number];
}

// TODO: 추후 작성 예정
const BookDetailInfoDesktop = ({ book }: BookDetailInfoDesktopProps) => {
  return <div>BookDetailInfoDesktop</div>;
};

export default BookDetailInfoDesktop;
