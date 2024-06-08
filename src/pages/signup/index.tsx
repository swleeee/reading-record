import { Link, SignupForm } from '@/components';
import Logo from '@/assets/image/Logo.svg?react';
import { PATH } from '@/constants';
import * as S from './index.styled';

const root = () => {
  return (
    <S.SignupLayout>
      <Link
        css={S.logoLink}
        styleType="tertiaryBrown"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} />
      </Link>
      <SignupForm />
    </S.SignupLayout>
  );
};

export default root;
