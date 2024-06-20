import React from 'react';

import { LoadingSpinner } from '../spinner';
import * as S from './Button.styled';

export type ButtonActionType = 'button' | 'submit' | 'reset';
export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'tertiaryPrimary'
  | 'tertiaryGray'
  | 'tertiaryBlue'
  | 'tertiaryRed';
export type ButtonSizeType = 'sm' | 'md' | 'lg' | 'full';

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  actionType?: ButtonActionType;
  styleType: ButtonStyleType;
  sizeType: ButtonSizeType;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  className,
  isDisabled = false,
  isLoading = false,
  actionType = 'button',
  styleType,
  sizeType,
  label,
  onClick,
}: ButtonProps) => {
  return (
    <S.Button
      className={className}
      type={actionType}
      isLoading={isLoading}
      disabled={isDisabled}
      sizeType={sizeType}
      styleType={styleType}
      onClick={onClick}
    >
      {isLoading && (
        <LoadingSpinner
          colorType={styleType === 'primary' ? 'white' : 'brown'}
        />
      )}
      {label}
    </S.Button>
  );
};
