import tw, { css } from 'twin.macro';

import type { LinkSizeType, LinkStyleType } from '@/types';

// NOTE: 링크 스타일
const linkTertiaryBrown = tw`text-brown400 hover:text-brown500 active:text-brown600 focus:(border border-solid border-brown700)`;
const linkTertiaryGray = tw`text-gray400 hover:text-gray500 active:text-gray600 focus:(border border-solid border-gray700)`;

const getButtonSize = (sizeType: LinkSizeType) => {
  if (sizeType === 'lg') return linkLg;
  if (sizeType === 'md') return linkMd;

  return linkSm;
};

// NOTE: 링크 크기
const linkSm = tw`m-body-m12 tablet:t-body-m12 desktop:d-body-m14`;
const linkMd = tw`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;
const linkLg = tw`m-body-m14 tablet:t-body-m14 desktop:d-body-m16`;

const getButtonStyle = (styleType: LinkStyleType) => {
  if (styleType === 'tertiaryGray') {
    return linkTertiaryGray;
  }

  return linkTertiaryBrown;
};

export const link = (sizeType: LinkSizeType, styleType: LinkStyleType) => css`
  ${getButtonSize(sizeType)};
  ${getButtonStyle(styleType)};
  ${tw`cursor-pointer`}
`;
