import { useSearchParams } from 'react-router-dom';
import { EmailAuthenticationForm, ResetPasswordForm } from './form';
import * as S from './ResetPassword.styled';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();

  const email = searchParams.get('email');

  return (
    <S.Section>
      <S.Title>{email ? '비밀번호 재설정' : '이메일 인증'}</S.Title>
      {email ? <ResetPasswordForm /> : <EmailAuthenticationForm />}
    </S.Section>
  );
};

export default ResetPassword;
