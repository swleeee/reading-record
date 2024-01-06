import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import { Header, MobileHeader } from '@/components';

const root = () => {
  const device = useRecoilValue(deviceState);

  if (device === 'mobile') return <MobileHeader />;
  return <Header />;
};

export default root;
