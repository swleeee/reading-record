import React, { Suspense } from 'react';

import { BookDetail, BookDetailInfoSkeleton, MainLayout } from '@/components';

const root = () => {
  return (
    <MainLayout>
      <Suspense fallback={<BookDetailInfoSkeleton />}>
        <BookDetail />
      </Suspense>
    </MainLayout>
  );
};

export default root;
