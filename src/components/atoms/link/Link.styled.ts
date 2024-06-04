import tw, { css } from 'twin.macro';

import type { LinkSizeType, LinkStyleType } from '@/types';

// NOTE: 링크 스타일
const linkSecondary = tw`border border-solid border-brown400 text-brown400 bg-white hover:bg-brown50 active:bg-brown100 focus:(border border-solid border-brown700) disabled:(border-0 text-brown300 bg-brown100 cursor-not-allowed)`;
const linkTertiaryBrown = tw`text-brown400 hover:text-brown500 active:text-brown600 focus:(border border-solid border-brown700)`;
const linkTertiaryGray = tw`text-gray400 hover:text-gray500 active:text-gray600 focus:(border border-solid border-gray700)`;

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
  ${tw`flex justify-center items-center gap-x-[6px] border-0 rounded-[4px] cursor-pointer border-amber-400`}
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
