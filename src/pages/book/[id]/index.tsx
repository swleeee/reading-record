import React, { Suspense } from 'react';

import {
  BookDetail,
  BookDetailInfoSkeleton,
  BookRecordListDataSkeleton,
  MainLayout,
} from '@/components';

const root = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <>
            <BookDetailInfoSkeleton />
            <BookRecordListDataSkeleton />
          </>
        }
      >
        <BookDetail />
      </Suspense>
    </MainLayout>
  );
};

export default root;
