import { useState } from 'react';

import type { ResetPasswordStep } from '@/types';
import { EmailAuthenticationForm, ResetPasswordForm } from './form';
import * as S from './ResetPassword.styled';

const ResetPassword = () => {
  const [step, setStep] = useState<ResetPasswordStep>('authentication');

  const handleSetStep = (step: ResetPasswordStep) => {
    setStep(step);
  };

  return (
    <S.Section>
      <S.Title>
        {step === 'resetPassword' ? '비밀번호 재설정' : '이메일 인증'}
      </S.Title>
      {step === 'resetPassword' ? (
        <ResetPasswordForm />
      ) : (
        <EmailAuthenticationForm handleSetStep={handleSetStep} />
      )}
    </S.Section>
  );
};

export default ResetPassword;
