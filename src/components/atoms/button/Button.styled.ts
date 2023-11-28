import tw, { css, styled } from 'twin.macro';

import type { ButtonSizeType, ButtonStyleType } from '@/types';

// NOTE: 공통 상태
const buttonDefault = css`
  ${tw`flex justify-center items-center gap-x-[6px] border-0 rounded-[4px] cursor-pointer`}
`;
const buttonLoading = tw`cursor-wait`;

// NOTE: 버튼 스타일
const buttonPrimaryDefault = tw`text-white bg-brown400 hover:bg-brown500 active:bg-brown600 focus:(border border-solid border-brown700) disabled:(bg-brown100 cursor-not-allowed)`;
const buttonPrimaryLoading = css`
  ${buttonLoading};
  ${buttonPrimaryDefault};
  ${tw`bg-brown400 hover:bg-brown400`}
`;

const buttonSecondaryDefault = tw`border border-solid border-brown400 text-brown400 bg-white hover:bg-brown100 active:bg-brown200 focus:(border border-solid border-brown700) disabled:(border-0 text-brown200 bg-brown100 cursor-not-allowed)`;
const buttonSecondaryLoading = css`
  ${buttonLoading};
  ${buttonSecondaryDefault};
  ${tw`hover:bg-white`}
`;

const buttonTertiaryDefault = tw`min-w-[inherit] p-0 text-brown400 bg-transparent underline hover:text-brown500 active:text-brown600 focus:(border border-solid border-brown700) disabled:(text-brown100 cursor-not-allowed)`;
const buttonTertiaryLoading = css`
  ${buttonLoading};
  ${buttonTertiaryDefault};
  ${tw`hover:text-brown400`};
`;

const getButtonSize = (sizeType: ButtonSizeType) => {
  if (sizeType === 'lg') return buttonLg;
  if (sizeType === 'md') return buttonLg; // TODO: "md"에 대한 스타일 정의할 것
  if (sizeType === 'sm') return buttonLg; // TODO: "md"에 대한 스타일 정의할 것

  return buttonFull;
};

// NOTE: 버튼 크기
const buttonLg = tw`m-body-m14 px-[9px] py-[7px] tablet:(t-body-m14 px-[10px] py-[8px]) labtop:d-body-m16`;
const buttonFull = tw`m-body-m14 min-w-[200px] w-full py-[7px] tablet:(t-body-m14 py-[8px]) labtop:d-body-m16`;

const getButtonStyle = (isLoading: boolean, styleType: ButtonStyleType) => {
  if (styleType === 'secondary') {
    return isLoading ? buttonSecondaryLoading : buttonSecondaryDefault;
  }

  if (styleType === 'tertiary') {
    return isLoading ? buttonTertiaryLoading : buttonTertiaryDefault;
  }

  return isLoading ? buttonPrimaryLoading : buttonPrimaryDefault;
};

interface ButtonProps {
  isLoading: boolean;
  sizeType: ButtonSizeType;
  styleType: ButtonStyleType;
}

export const Button = styled.button<ButtonProps>(
  ({ isLoading, sizeType, styleType }) => css`
    ${buttonDefault};
    ${getButtonSize(sizeType)};
    ${getButtonStyle(isLoading, styleType)};
  `,
);
