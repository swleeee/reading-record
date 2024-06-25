import tw, { css } from 'twin.macro';

import type { LinkSizeType, LinkStyleType } from './Link';

// NOTE: 링크 스타일
const linkSecondary = tw`border border-solid border-light-brown-400 text-light-brown-400 bg-white hover:(bg-light-brown-50) active:bg-light-brown-100 focus:(border border-solid border-light-brown-700) disabled:(border-0 text-light-brown-300 bg-light-brown-100 cursor-not-allowed)`;
const linkTertiaryBrown = tw`text-light-brown-400 dark:text-dark-brown-500 hover:(text-light-brown-500 dark:text-dark-brown-400) active:(text-light-brown-600 dark:text-dark-brown-300) focus:(border border-solid border-light-brown-700 dark:border-dark-brown-200)`;
const linkTertiaryGray = tw`text-light-grey-400 dark:text-dark-grey-500 hover:(text-light-grey-500 dark:text-dark-grey-400) active:(text-light-grey-600 dark:text-dark-grey-300) focus:(border border-solid border-light-grey-700 dark:border-dark-grey-200)`;

const getLinkStyle = (styleType: LinkStyleType) => {
  if (styleType === 'secondary') {
    return linkSecondary;
  }

  if (styleType === 'tertiaryGray') {
    return linkTertiaryGray;
  }

  return linkTertiaryBrown;
};

const checkTertiaryStyle = (styleType: LinkStyleType) => {
  if (styleType === 'tertiaryBrown' || styleType === 'tertiaryGray')
    return true;

  return false;
};

const linkDefault = css`
  ${tw`flex justify-center items-center gap-x-[6px] border-0 rounded-[4px] cursor-pointer border-light-brown-400`}
`;

// NOTE: 링크 크기
const linkSm = tw`m-body-m12 tablet:t-body-m12 desktop:d-body-m14`;
const linkMd = tw`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;
const linkLg = tw`m-body-m14 tablet:t-body-m14 desktop:d-body-m16`;
const linkFull = tw`m-body-m14 min-w-[200px] w-full h-[44px] tablet:(t-body-m14 py-[8px]) desktop:d-body-m16`;

const getLinkSize = (sizeType: LinkSizeType) => {
  if (sizeType === 'lg') return linkLg;
  if (sizeType === 'md') return linkMd;
  if (sizeType === 'sm') return linkSm;

  return linkFull;
};

export const link = (sizeType: LinkSizeType, styleType: LinkStyleType) => css`
  ${!checkTertiaryStyle(styleType) && linkDefault}
  ${getLinkSize(sizeType)};
  ${getLinkStyle(styleType)};
  ${tw`cursor-pointer`}
`;
