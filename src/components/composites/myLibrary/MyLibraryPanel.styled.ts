import tw, { css } from 'twin.macro';

export const Container = tw.div`pt-[12px] px-[24px] tablet:(max-w-[1360px] mx-auto)`;

export const noData = (topPosition: number) => css`
  min-height: calc(100dvh - ${topPosition * 2}px);
`;
