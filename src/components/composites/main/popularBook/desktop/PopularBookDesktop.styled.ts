import tw, { css } from 'twin.macro';

export const PopularBookSection = tw.section`tablet:mb-[64px] mx-[64px] px-[24px] py-[16px] bg-white`;

export const Title = tw.h2`tablet:t-body-m15 mb-[8px] desktop:d-body-m17`;

export const dateSegmentedButton = css`
  ${tw`mb-8`}
`;

export const PopularBookCardWrapper = tw.div`grid grid-cols-auto-fill-144 gap-x-[40px] gap-y-[20px]`;

export const bookDetailLink = css`
  ${tw`block w-[130px] h-[192px] hover:scale-110 duration-500`}
`;

export const BookThumbnail = tw.img`h-full object-fill`;
