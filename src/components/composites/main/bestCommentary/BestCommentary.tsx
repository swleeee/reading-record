import React from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

import { deviceState } from '@/stores';
import BestCommentaryMobile from './mobile/BestCommentaryMobile';
import BestCommentaryDesktop from './desktop/BestCommentaryDesktop';
import { useGetBestRecords } from '@/services';

const BestCommentary = () => {
  const device = useRecoilValue(deviceState);

  const today = dayjs();

  // TODO: 추후 일간, 월간 들어갈지 말지 고려 필요
  // TODO: 로그인하지 않았을 경우에 대한 화면 처리 필요
  const req = {
    startDateTime: today.isoWeekday(-6).startOf('day').toISOString(),
    endDateTime: today.isoWeekday(0).startOf('day').toISOString(),
  };

  const { data: books } = useGetBestRecords(req);

  if (!books) return null;

  return device === 'mobile' ? (
    <BestCommentaryMobile books={books} />
  ) : (
    <BestCommentaryDesktop books={books} />
  );
};

export default BestCommentary;
