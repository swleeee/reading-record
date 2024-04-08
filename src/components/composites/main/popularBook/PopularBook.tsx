import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import PopularBookDesktop from './desktop/PopularBookDesktop';
import PopularBookMobile from './mobile/PopularBookMobile';

const PopularBook = () => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? <PopularBookMobile /> : <PopularBookDesktop />;
};

export default PopularBook;
