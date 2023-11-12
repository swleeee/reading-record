import tw from 'twin.macro';
import styled from '@emotion/styled';

import type { ButtonSizeType, ButtonStyleType } from '@/types';

interface ButtonProps {
  isLoading: boolean;
  sizeType: ButtonSizeType;
  styleType: ButtonStyleType;
}

export const Button = styled.button<ButtonProps>(
  ({ isLoading, sizeType, styleType }) => [
    sizeType === 'lg' && tw`button-lg`,
    sizeType === 'md' && tw`button-md`,
    sizeType === 'sm' && tw`button-sm`,

    styleType === 'primary' &&
      (isLoading ? tw`button-primary-loading` : tw`button-primary`),
    styleType === 'secondary' &&
      (isLoading ? tw`button-secondary-loading` : tw`button-secondary`),
    styleType === 'tertiary' &&
      (isLoading ? tw`button-tertiary-loading` : tw`button-tertiary`),
  ],
);
