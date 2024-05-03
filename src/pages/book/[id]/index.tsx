import React, { Suspense } from 'react';

import {
  BookDetail,
  BookDetailInfoSkeleton,
  BookRecordListSkeleton,
  MainLayout,
} from '@/components';

const root = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <>
            <BookDetailInfoSkeleton />
            <BookRecordListSkeleton />
          </>
        }
      >
        <BookDetail />
      </Suspense>
    </MainLayout>
  );
};

export default root;
