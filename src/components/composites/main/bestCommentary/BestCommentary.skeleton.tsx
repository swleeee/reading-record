import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import BestCommentaryMobileSkeleton from './mobile/BestCommentaryMobile.skeleton';
import BestCommentaryDesktopSkeleton from './desktop/BestCommentaryDesktop.skeleton';
import * as S from './BestCommentary.styled';

const BestCommentarySkeleton = () => {
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

export default BestCommentarySkeleton;
