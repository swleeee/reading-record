import LoadingImg from '@/assets/image/loading.svg?react';
import * as S from './LoadingPage.styled';

const LoadingPage = () => {
  return (
    <S.Container>
      <LoadingImg css={S.imgStyle} />
    </S.Container>
  );
};

export default LoadingPage;
