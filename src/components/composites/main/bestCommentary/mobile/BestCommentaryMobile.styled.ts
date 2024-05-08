import tw, { css, styled } from 'twin.macro';

export const Title = tw.h2`ml-[24px] mb-[8px] m-body-m15`;

export const swiper = tw`pb-[10px]`;

export const SkeletonWrapper = styled.div`
  & > span {
    display: flex;
    justify-content: center;
  }
`;
