import React, { Suspense } from 'react';

import {
  BookDetail,
  BookDetailInfoSkeleton,
  BookRecordSkeleton,
  MainLayout,
} from '@/components';

const root = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <>
            <BookDetailInfoSkeleton />
            <BookRecordSkeleton />
          </>
        }
      >
        <BookDetail />
      </Suspense>
    </MainLayout>
  );
};

export default root;
