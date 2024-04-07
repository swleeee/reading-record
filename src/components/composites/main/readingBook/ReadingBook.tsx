import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import ReadingBookMobile from './mobile/ReadingBookMobile';
import ReadingBookDesktop from './desktop/ReadingBookDesktop';

const ReadingBook = () => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? <ReadingBookMobile /> : <ReadingBookDesktop />;
};

export default ReadingBook;
