import LoadingImg from '@/shared/assets/image/loading.svg?react';
import * as S from './LoadingPage.styled';

export const LoadingPage = () => {
  return (
    <S.Container>
      <LoadingImg css={S.imgStyle} />
    </S.Container>
  );
};
