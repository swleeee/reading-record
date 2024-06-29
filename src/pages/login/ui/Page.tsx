import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm, SocialLogin } from '@/features/login';
import { Link } from '@/shared/ui';
import { useUser } from '@/shared/lib';
import Logo from '@/shared/assets/image/Logo.svg?react';
import { PATH } from '@/shared/constants';
import * as S from './Page.styled';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { isInitializing, user } = useUser();

  useEffect(() => {
    if (!user || isInitializing) return;

    navigate(PATH.ROOT);
  }, [isInitializing, user, navigate]);

  return user ? null : (
    <S.LoginLayout>
      <Link
        css={S.logoLink}
        styleType="tertiaryBrown"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} />
      </Link>
      <S.LoginContents>
        <LoginForm />
        <S.AuthNavigation>
          <Link
            sizeType="sm"
            styleType="tertiaryBrown"
            to={PATH.RESET_PASSWORD}
          >
            비밀번호 찾기
          </Link>
        </S.AuthNavigation>
        <SocialLogin />
      </S.LoginContents>
    </S.LoginLayout>
  );
};
