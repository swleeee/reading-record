import { useRecoilValue } from 'recoil';

import { useGetUserRecords } from '@/entities/record';
import { useUser } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import CurrentReadingBookMobile from './mobile/CurrentReadingBookMobile';
import CurrentReadingBookDesktop from './desktop/CurrentReadingBookDesktop';
import * as S from './CurrentReadingBook.styled';

export const CurrentReadingBook = () => {
  const device = useRecoilValue(deviceState);

  const { user } = useUser();
  const req = {
    userId: user?.id!,
    filter: 'ongoing' as const,
    target: 'myself' as const,
  };

  const { data } = useGetUserRecords(req);

  return (
    <S.Container>
      {device === 'mobile' ? (
        <CurrentReadingBookMobile books={data?.records} />
      ) : (
        <CurrentReadingBookDesktop books={data?.records} />
      )}
    </S.Container>
  );
};
