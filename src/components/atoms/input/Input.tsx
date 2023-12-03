import React from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Input.styled';

interface InputProps {
  className?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  hasError?: boolean;
  maxLength?: number;
  placeholder?: string;
  type?: string;
  value: string;
  register?: UseFormRegisterReturn<string>;
}

const Input = ({
  className,
  children,
  isDisabled = false,
  hasError = false,
  maxLength,
  placeholder,
  type = 'text',
  value,
  register,
}: InputProps) => {
  return (
    <S.InputWrapper className={className}>
      <S.Input
        aria-invalid={hasError}
        autoComplete="off"
        disabled={isDisabled}
        hasError={hasError}
        maxLength={maxLength}
        placeholder={placeholder}
        type={type}
        value={value}
        {...register}
      />
      {children && children}
    </S.InputWrapper>
  );
};

export default Input;
