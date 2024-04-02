import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import BestCommentaryMobile from './mobile/BestCommentaryMobile';
import BestCommentaryDesktop from './desktop/BestCommentaryDesktop';

const BestCommentary = () => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? (
    <BestCommentaryMobile />
  ) : (
    <BestCommentaryDesktop />
  );
};

export default BestCommentary;
