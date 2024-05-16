import React from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

import { useUser } from '@/contexts';
import { useGetBestRecords } from '@/services';
import { deviceState } from '@/stores';
import BestCommentaryMobile from './mobile/BestCommentaryMobile';
import BestCommentaryDesktop from './desktop/BestCommentaryDesktop';
import * as S from './BestCommentary.styled';

const BestCommentary = () => {
  const device = useRecoilValue(deviceState);

  const { user } = useUser();
  const today = dayjs();

  // TODO: 추후 일간, 월간 들어갈지 말지 고려 필요
  const req = {
    userId: user?.id!,
    startDateTime: today.isoWeekday(-6).startOf('day').toISOString(),
    endDateTime: today.isoWeekday(0).startOf('day').toISOString(),
  };

  const { data: books } = useGetBestRecords(req);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <BestCommentaryMobile books={books} />
      ) : (
        <BestCommentaryDesktop books={books} />
      )}
    </S.Container>
  );
};

export default BestCommentary;
