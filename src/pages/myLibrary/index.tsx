import React, { Suspense } from 'react';

import {
  BookListSkeleton,
  MainLayout,
  MyLibraryPanel,
  Tab,
} from '@/components';

const root = () => {
  const tabs = [
    {
      key: 'all',
      label: '전체',
      content: (
        <Suspense fallback={<BookListSkeleton />}>
          <MyLibraryPanel queryStatus="all" />
        </Suspense>
      ),
    },
    // TODO: 소장 기능 추가 후 주석 해제
    // {
    //   key: 'pending',
    //   label: '소장 중',
    //   content: <MyLibraryPanel queryStatus="pending" />,
    // },
    {
      key: 'ongoing',
      label: '읽고 있는 중',
      content: (
        <Suspense fallback={<BookListSkeleton />}>
          <MyLibraryPanel queryStatus="ongoing" />
        </Suspense>
      ),
    },
    {
      key: 'completed',
      label: '읽기 완료',
      content: (
        <Suspense fallback={<BookListSkeleton />}>
          <MyLibraryPanel queryStatus="completed" />
        </Suspense>
      ),
    },
  ];

  return (
    <MainLayout>
      <Tab tabs={tabs} />
    </MainLayout>
  );
};

export default root;
