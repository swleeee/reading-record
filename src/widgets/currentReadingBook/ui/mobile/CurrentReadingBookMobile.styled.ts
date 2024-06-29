import tw, { styled } from 'twin.macro';

export const ReadingBookSection = tw.section`mb-[64px]`;

export const Title = tw.h2`mb-[8px] px-[24px] m-body-m15 dark:text-white`;

export const swiper = tw`pb-[10px]`;

export const SkeletonCardWrapper = styled.div`
  ${tw`flex`}

  & > * {
    ${tw`mx-[24px]`}
  }
`;
