import React from 'react';

import { MainLayout, Terms } from '@/components';
import * as S from './index.styled';

const index = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <Terms />
    </MainLayout>
  );
};

export default index;
