import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import CurrentBookMobile from './mobile/CurrentBookMobile';
import CurrentBookDesktop from './desktop/CurrentBookDesktop';

const CurrentBook = () => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? <CurrentBookMobile /> : <CurrentBookDesktop />;
};

export default CurrentBook;
