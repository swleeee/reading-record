import tw, { css } from 'twin.macro';

export const ReadingBookSection = tw.section`tablet:mb-[64px] mx-[64px] px-[24px] py-[16px] bg-white`;

export const Title = tw.h2`tablet:t-body-m15 mb-[8px] desktop:d-body-m17`;

export const BookReadingCardWrapper = tw.div`grid grid-cols-auto-fill-192 gap-x-[40px] gap-y-[20px]`;

export const card = css`
  ${tw`w-full`}
`;
