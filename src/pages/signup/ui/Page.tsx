import { SignupForm } from '@/features/signup';
import { Link } from '@/shared/ui';
import Logo from '@/shared/assets/image/Logo.svg?react';
import { PATH } from '@/shared/constants';
import * as S from './Page.styled';

const SignupPage = () => {
  return (
    <S.SignupLayout>
      <Link
        css={S.logoLink}
        styleType="tertiaryBrown"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} aria-label="Reading Record logo" />
      </Link>
      <SignupForm />
    </S.SignupLayout>
  );
};

export default SignupPage;
