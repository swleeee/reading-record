import { useSearchParams } from 'react-router-dom';

import { ResetPasswordForm } from '@/features/reset-password';
import { EmailAuthenticationForm } from '@/features/authorize-email';
import { Link } from '@/shared/ui';
import Logo from '@/shared/assets/image/Logo.svg?react';
import { PATH } from '@/shared/constants';
import * as S from './Page.styled';

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email');

  return (
    <S.Layout>
      <Link
        css={S.logoLink}
        styleType="tertiaryBrown"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} />
      </Link>
      <S.Section>
        <S.Title>{email ? '비밀번호 재설정' : '이메일 인증'}</S.Title>
        {email ? <ResetPasswordForm /> : <EmailAuthenticationForm />}
      </S.Section>
    </S.Layout>
  );
};

export default ResetPasswordPage;
