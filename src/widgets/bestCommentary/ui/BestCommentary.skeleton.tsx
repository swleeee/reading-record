import { useRecoilValue } from 'recoil';

import { deviceState } from '@/shared/stores';
import BestCommentaryMobileSkeleton from './mobile/BestCommentaryMobile.skeleton';
import BestCommentaryDesktopSkeleton from './desktop/BestCommentaryDesktop.skeleton';
import * as S from './BestCommentary.styled';

export const BestCommentarySkeleton = () => {
  const device = useRecoilValue(deviceState);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <BestCommentaryMobileSkeleton />
      ) : (
        <BestCommentaryDesktopSkeleton />
      )}
    </S.Container>
  );
};
