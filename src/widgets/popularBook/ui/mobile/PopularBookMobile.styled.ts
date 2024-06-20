import tw, { css } from 'twin.macro';

export const PopularBookSection = tw.section`mb-[64px]`;

export const Title = tw.h2`mx-[24px] mb-4 m-body-m15`;

export const dateSegmentedButton = css`
  ${tw`mx-[24px] mb-8`}
`;

export const swiper = tw`pb-[10px]`;

export const bookDetailLink = css`
  ${tw`block w-[130px] h-[192px]`}
`;

export const BookThumbnail = tw.img`h-full object-fill`;
