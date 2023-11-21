import React from 'react';

import { Input } from '@/components';
import VisibilityOff from '@/assets/icon/ic_visibility_off.svg?react';
import VisibilityOn from '@/assets/icon/ic_visibility_on.svg?react';
import useLoginForm from './hooks/useLoginForm';
import * as S from './LoginForm.styled';

const LoginForm = () => {
  const { isPasswordVisible, errors, watch, register, handlePasswordToggle } =
    useLoginForm();
  return (
    <>
      <Input
        css={S.loginInput}
        placeholder="이메일"
        value={watch('email')}
        register={register('email')}
      />
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        css={S.passwordInput}
        placeholder="비밀번호"
        value={watch('password')}
        register={register('password')}
      >
        <S.VisibleButton
          type="button"
          aria-label={isPasswordVisible ? 'Hide password' : 'Show Password'}
          onClick={handlePasswordToggle}
        >
          {isPasswordVisible ? <VisibilityOff /> : <VisibilityOn />}
        </S.VisibleButton>
      </Input>
    </>
  );
};

export default LoginForm;
