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

const buttonSecondaryDefault = tw`border border-solid border-brown400 text-brown400 bg-white hover:bg-brown50 active:bg-brown100 focus:(border border-solid border-brown700) disabled:(border-0 text-brown200 bg-brown100 cursor-not-allowed)`;
const buttonSecondaryLoading = css`
  ${buttonLoading};
  ${buttonSecondaryDefault};
  ${tw`hover:bg-white`}
`;

const buttonTertiaryDefault = tw`min-w-[inherit] h-auto p-0 bg-transparent focus:(border border-solid) disabled:cursor-not-allowed`;

const buttonTertiaryPrimaryDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-brown400 hover:text-brown500 active:text-brown600 focus:border-brown700 disabled:text-brown100`}
`;
const buttonTertiaryPrimaryLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-brown400`};
`;

const buttonTertiaryGrayDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-gray300 hover:text-gray400 active:text-gray500 focus:border-gray600 disabled:text-gray100`}
`;
const buttonTertiaryGrayLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-gray300`};
`;

const buttonTertiaryBlueDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-blue200 hover:text-blue300 active:text-blue400 focus:border-blue500 disabled:text-blue50`}
`;
const buttonTertiaryBlueLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-blue200`};
`;

const buttonTertiaryRedDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-red200 hover:text-red300 active:text-red400 focus:border-red500 disabled:text-red50`}
`;
const buttonTertiaryRedLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-red200`};
`;

const getButtonSize = (sizeType: ButtonSizeType) => {
  if (sizeType === 'lg') return buttonLg;
  if (sizeType === 'md') return buttonMd;
  if (sizeType === 'sm') return buttonSm;

  return buttonFull;
};

// NOTE: 버튼 크기
const buttonSm = tw`m-body-m12 h-[28px] px-[8px] tablet:(t-body-m12 px-[6px] py-[4px]) labtop:d-body-m14`;
const buttonMd = tw`m-body-m13 h-[36px] px-[10px] tablet:(t-body-m13 px-[8px] py-[6px]) labtop:d-body-m15`;
const buttonLg = tw`m-body-m14 h-[44px] px-[14px] tablet:(t-body-m14 px-[10px] py-[8px]) labtop:d-body-m16`;
const buttonFull = tw`m-body-m14 min-w-[200px] w-full h-[44px] tablet:(t-body-m14 py-[8px]) labtop:d-body-m16`;

const getButtonStyle = (isLoading: boolean, styleType: ButtonStyleType) => {
  if (styleType === 'secondary') {
    return isLoading ? buttonSecondaryLoading : buttonSecondaryDefault;
  }

  if (styleType === 'tertiaryPrimary') {
    return isLoading
      ? buttonTertiaryPrimaryLoading
      : buttonTertiaryPrimaryDefault;
  }

  if (styleType === 'tertiaryGray') {
    return isLoading ? buttonTertiaryGrayLoading : buttonTertiaryGrayDefault;
  }

  if (styleType === 'tertiaryBlue') {
    return isLoading ? buttonTertiaryBlueLoading : buttonTertiaryBlueDefault;
  }

  if (styleType === 'tertiaryRed') {
    return isLoading ? buttonTertiaryRedLoading : buttonTertiaryRedDefault;
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
