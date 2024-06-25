import tw, { css, styled } from 'twin.macro';

import type { ButtonSizeType, ButtonStyleType } from './Button';

// NOTE: 공통 상태
const buttonDefault = css`
  ${tw`flex justify-center items-center gap-x-[6px] border-0 rounded-[4px] cursor-pointer`}
`;
const buttonLoading = tw`cursor-wait`;

// NOTE: 버튼 스타일
const buttonPrimaryDefault = tw`text-white bg-light-brown-400 dark:bg-dark-brown-600 hover:(bg-light-brown-500 dark:bg-dark-brown-500) active:(bg-light-brown-600 dark:bg-dark-brown-400) focus:(border border-solid border-light-brown-700 dark:border-dark-brown-300) disabled:(bg-light-brown-100 cursor-not-allowed dark:bg-dark-brown-800)`;
const buttonPrimaryLoading = css`
  ${buttonLoading};
  ${buttonPrimaryDefault};
  ${tw`bg-light-brown-400 hover:bg-light-brown-400`}
`;

const buttonSecondaryDefault = tw`border border-solid border-light-brown-400 text-light-brown-400 bg-white hover:(bg-light-brown-50) active:bg-light-brown-100 focus:(border border-solid border-light-brown-700) disabled:(border-0 text-light-brown-300 bg-light-brown-100 cursor-not-allowed)`;
const buttonSecondaryLoading = css`
  ${buttonLoading};
  ${buttonSecondaryDefault};
  ${tw`hover:bg-white`}
`;

const buttonTertiaryDefault = tw`min-w-[inherit] h-auto p-0 bg-transparent focus:(border border-solid) disabled:cursor-not-allowed`;

const buttonTertiaryPrimaryDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-light-brown-400 dark:text-dark-brown-600 hover:(text-light-brown-500 dark:text-dark-brown-500) active:(text-light-brown-600 dark:text-dark-brown-400) focus:(border-light-brown-700 dark:border-dark-brown-300) disabled:(text-light-brown-100 dark:text-dark-brown-800)`}
`;
const buttonTertiaryPrimaryLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-light-brown-400`};
`;

const buttonTertiaryGrayDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-light-grey-400 dark:text-dark-grey-500 hover:(text-light-grey-500 dark:text-dark-grey-400) active:(text-light-grey-600 dark:text-dark-grey-300) focus:(border-light-grey-700 dark:border-dark-grey-200) disabled:text-light-grey-100`}
`;
const buttonTertiaryGrayLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-light-grey-400`};
`;

const buttonTertiaryBlueDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-light-navy-500 hover:text-light-navy-600 active:text-light-navy-600 focus:text-light-navy-600 disabled:text-light-navy-50`}
`;
const buttonTertiaryBlueLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-light-navy-600`};
`;

const buttonTertiaryRedDefault = css`
  ${buttonTertiaryDefault};
  ${tw`text-light-red-500 hover:text-light-red-600 active:text-light-red-600 focus:text-light-red-600 disabled:text-light-red-600`}
`;
const buttonTertiaryRedLoading = css`
  ${buttonLoading};
  ${buttonTertiaryPrimaryDefault};
  ${tw`hover:text-light-red-500`};
`;

const checkHasPadding = (styleType: ButtonStyleType) => {
  if (styleType === 'primary' || styleType === 'secondary') return true;

  return false;
};

const getButtonSize = (
  sizeType: ButtonSizeType,
  styleType: ButtonStyleType,
) => {
  const hasPadding = checkHasPadding(styleType);

  if (sizeType === 'lg') return lgStyle(hasPadding);
  if (sizeType === 'md') return mdStyle(hasPadding);
  if (sizeType === 'sm') return smStyle(hasPadding);

  return fullStyle(hasPadding);
};

// NOTE: 버튼 크기
const smStyle = (hasPadding: boolean) => css`
  ${tw`m-body-m12 h-[28px] tablet:t-body-m12 desktop:d-body-m14`};
  ${hasPadding && tw`px-[8px] tablet:(px-[6px] py-[4px])`}
`;

const mdStyle = (hasPadding: boolean) => css`
  ${tw`m-body-m13 h-[36px] tablet:t-body-m13 desktop:d-body-m15`};
  ${hasPadding && tw`px-[10px] tablet:(px-[8px] py-[6px])`}
`;

const lgStyle = (hasPadding: boolean) => css`
  ${tw`m-body-m14 h-[44px] tablet:t-body-m14 desktop:d-body-m16`};
  ${hasPadding && tw`px-[14px] tablet:(px-[10px] py-[8px])`}
`;

const fullStyle = (hasPadding: boolean) => css`
  ${tw`m-body-m14 min-w-[200px] w-full h-[44px] tablet:t-body-m14 desktop:d-body-m16`};
  ${hasPadding && tw`tablet:py-[8px]`}
`;

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
    ${getButtonSize(sizeType, styleType)};
    ${getButtonStyle(isLoading, styleType)};
  `,
);
