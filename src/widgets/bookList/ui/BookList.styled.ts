import tw, { css, styled } from 'twin.macro';

export const Container = tw.div`tablet:(max-w-[1360px] mx-auto px-[24px])`;

export const NoSearchContainer = styled.div<{ boundingClientTop: number }>`
  ${({ boundingClientTop }) => css`
    ${tw`flex flex-col gap-y-[16px] justify-center items-center`}
    min-height: calc(100dvh - ${boundingClientTop}px - 64px);
  `}
`;

export const searchIcon = css`
  ${tw`w-[110px] h-[110px] animate-shakingUpAndDown tablet:(w-[198px] h-[198px]) desktop:(w-[220px] h-[220px])`}

  & > g > path {
    ${tw`fill-brown400`}
  }
`;

export const NoSearchText = tw.p`m-headline-2 text-brown400 tablet:t-headline-3 desktop:d-headline-3`;
