import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { useGetMyLibraries } from '@/services';
import { deviceState } from '@/stores';
import ReadingBookMobile from './mobile/ReadingBookMobile';
import ReadingBookDesktop from './desktop/ReadingBookDesktop';
import * as S from './ReadingBook.styled';

const ReadingBook = () => {
  const device = useRecoilValue(deviceState);

  const { user } = useUser();
  const req = { userId: user?.id!, filter: 'ongoing' as const };

  const { data } = useGetMyLibraries(req);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <ReadingBookMobile books={data?.records} />
      ) : (
        <ReadingBookDesktop books={data?.records} />
      )}
    </S.Container>
  );
};

export default ReadingBook;
