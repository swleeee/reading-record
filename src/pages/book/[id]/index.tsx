import React, { Suspense } from 'react';

import { BookDetail, MainLayout } from '@/components';

const root = () => {
  return (
    <MainLayout>
      {/* TODO: 스켈레톤 UI 추가 예정 */}
      <Suspense fallback={<></>}>
        <BookDetail />
      </Suspense>
    </MainLayout>
  );
};

export default root;
