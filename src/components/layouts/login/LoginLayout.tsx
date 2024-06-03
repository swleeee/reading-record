import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts';
import { AuthNavigation, Link, LoginForm, SocialLogin } from '@/components';
import Logo from '@/assets/image/Logo.svg?react';
import * as S from './LoginLayout.styled';

const LoginLayout = () => {
  const navigate = useNavigate();

  const { isInitializing, user } = useUser();

  useEffect(() => {
    if (!user || isInitializing) return;

    navigate('/');
  }, [isInitializing, user, navigate]);

  return user ? null : (
    <S.LoginLayout>
      <Link css={S.logoLink} styleType="tertiaryBrown" sizeType="md" to="/">
        <Logo css={S.logo} />
      </Link>
      <S.LoginContents>
        <LoginForm />
        <AuthNavigation />
        <SocialLogin />
      </S.LoginContents>
    </S.LoginLayout>
  );
};

export default LoginLayout;
