import { useRecoilValue } from 'recoil';

import { deviceState } from '@/shared/stores';
import CurrentReadingBookMobileSkeleton from './mobile/CurrentReadingBookMobile.skeleton';
import CurrentReadingBookDesktopSkeleton from './desktop/CurrentReadingBookDesktop.skeleton';
import * as S from './CurrentReadingBook.styled';

export const CurrentReadingBookSkeleton = () => {
  const device = useRecoilValue(deviceState);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <CurrentReadingBookMobileSkeleton />
      ) : (
        <CurrentReadingBookDesktopSkeleton />
      )}
    </S.Container>
  );
};
