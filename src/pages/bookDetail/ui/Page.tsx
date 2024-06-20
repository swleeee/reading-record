import { Suspense } from 'react';

import { Layout } from '@/widgets/layout';
import { BookDetail } from '@/widgets/bookDetail';
import { BookDescriptionSkeleton } from '@/widgets/bookDescription';
import { BookRecordSkeleton } from '@/widgets/bookRecords';

export const BookDetailPage = () => {
  return (
    <Layout>
      <Suspense
        fallback={
          <>
            <BookDescriptionSkeleton />
            <BookRecordSkeleton />
          </>
        }
      >
        <BookDetail />
      </Suspense>
    </Layout>
  );
};
