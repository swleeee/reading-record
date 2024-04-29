import React from 'react';

import { Button, Input } from '@/components';
import { ERROR_MSG } from '@/assets';
import VisibilityOff from '@/assets/icon/ic_visibility_off.svg?react';
import VisibilityOn from '@/assets/icon/ic_visibility_on.svg?react';
import useLoginForm from './hooks/useLoginForm';
import * as S from './LoginForm.styled';

const LoginForm = () => {
  const {
    isPasswordVisible,
    isLoginLoading,
    errors,
    watch,
    register,
    handlePasswordToggle,
    handleLoginFormSubmit,
  } = useLoginForm();

  return (
    <S.LoginForm onSubmit={handleLoginFormSubmit}>
      <Input
        css={S.loginInput}
        hasError={!!errors.email?.type}
        value={watch('email')}
        placeholder="이메일"
        register={register('email', {
          required: ERROR_MSG.REQUIRED,
        })}
      />
      <Input
        css={S.passwordInput}
        hasError={!!errors.password?.type}
        value={watch('password')}
        placeholder="비밀번호"
        type={isPasswordVisible ? 'text' : 'password'}
        register={register('password', {
          required: ERROR_MSG.REQUIRED,
        })}
      >
        <S.VisibleButton
          type="button"
          aria-label={isPasswordVisible ? 'Hide password' : 'Show Password'}
          onClick={handlePasswordToggle}
        >
          {isPasswordVisible ? <VisibilityOff /> : <VisibilityOn />}
        </S.VisibleButton>
      </Input>
      <Button
        css={S.loginButton}
        isDisabled={!!Object.keys(errors).length}
        isLoading={isLoginLoading}
        actionType="submit"
        label="로그인"
        styleType="primary"
        sizeType="full"
      />
    </S.LoginForm>
  );
};

export default LoginForm;
