import type { UseFormRegisterReturn } from 'react-hook-form';

import * as S from './Textarea.styled';

interface TextareaProps {
  className?: string;
  disabled?: boolean;
  hasError?: boolean;
  id: string;
  maxLength: number;
  placeholder: string;
  value: string;
  register: UseFormRegisterReturn;
}

export const Textarea = ({
  className,
  disabled,
  hasError,
  id,
  maxLength,
  placeholder,
  value,
  register,
}: TextareaProps) => (
  <S.TextareaWrapper>
    <S.Length hasValue={!!value.length}>
      {value.length.toLocaleString()} / {maxLength.toLocaleString()}
    </S.Length>
    <S.Textarea
      className={className}
      disabled={disabled}
      hasError={hasError}
      id={id}
      maxLength={maxLength}
      placeholder={placeholder}
      {...register}
    />
  </S.TextareaWrapper>
);
