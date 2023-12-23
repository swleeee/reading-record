import React from 'react';

import type {
  ButtonActionType,
  ButtonSizeType,
  ButtonStyleType,
} from '@/types';
import * as S from './Button.styled';
import { LoadingSpinnner } from '../spinner';

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

const Button = ({
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
      disabled={isDisabled}
      sizeType={sizeType}
      styleType={styleType}
      isLoading={isLoading}
      onClick={onClick}
    >
      {/* {isLoading ? <LoadingSpinnner /> : label} */}
      {isLoading && (
        <LoadingSpinnner
          colorType={styleType === 'primary' ? 'white' : 'brown'}
        />
      )}
      {label}
    </S.Button>
  );
};

export default Button;
