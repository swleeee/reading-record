import React from 'react';

import { MainLayout, MyLibraryPanel, Tab } from '@/components';
import * as S from './index.styled';

const root = () => {
  const tabs = [
    {
      key: 'all',
      label: '전체',
      content: <MyLibraryPanel queryStatus="all" />,
    },
    {
      key: 'pending',
      label: '소장 중',
      content: <MyLibraryPanel queryStatus="pending" />,
    },
    {
      key: 'ongoing',
      label: '읽고 있는 중',
      content: <MyLibraryPanel queryStatus="ongoing" />,
    },
    {
      key: 'completed',
      label: '읽기 완료',
      content: <MyLibraryPanel queryStatus="completed" />,
    },
  ];

  return (
    <MainLayout css={S.mainLayout}>
      <Tab tabs={tabs} />
    </MainLayout>
  );
};

export default root;
