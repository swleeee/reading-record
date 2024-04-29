import React from 'react';

import { BookListCardSkeleton } from '@/components';

const BookListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <BookListCardSkeleton key={i} />
      ))}
    </>
  );
};

export default BookListSkeleton;
