import tw, { css, styled } from 'twin.macro';

export const NoSearchContainer = styled.div<{ boundingClientTop: number }>`
  ${({ boundingClientTop }) => css`
    ${tw`flex flex-col gap-y-[16px] justify-center items-center`}
    min-height: calc(100dvh - ${boundingClientTop}px - 64px);
  `}
`;

export const searchIcon = css`
  ${tw`w-[64px] h-[64px] animate-shakingUpAndDown tablet:(w-[88px] h-[88px]) desktop:(w-[110px] h-[110px])`}

  & > g > path {
    ${tw`fill-brown400`}
  }
`;

export const NoSearchText = tw.p`m-headline-2 text-brown400 tablet:t-headline-3 desktop:d-headline-3`;
