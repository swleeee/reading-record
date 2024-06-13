import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import ReadingBookMobileSkeleton from './mobile/ReadingBookMobile.skeleton';
import ReadingBookDesktopSkeleton from './desktop/ReadingBookDesktop.skeleton';
import * as S from './ReadingBook.styled';

const ReadingBookSkeleton = () => {
  const device = useRecoilValue(deviceState);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <ReadingBookMobileSkeleton />
      ) : (
        <ReadingBookDesktopSkeleton />
      )}
    </S.Container>
  );
};

export default ReadingBookSkeleton;
