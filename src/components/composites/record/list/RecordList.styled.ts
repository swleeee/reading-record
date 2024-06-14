import tw, { css } from 'twin.macro';

export const Container = tw.div`pt-[12px] tablet:(max-w-[1360px] mx-auto)`;

export const RecordList = tw.div`flex flex-wrap gap-x-[32px] gap-y-[24px] max-w-[800px] mx-auto tablet:gap-y-[28px] desktop:gap-y-[36px]`;

export const noData = (topPosition: number) => css`
  min-height: calc(100dvh - ${topPosition * 2}px);
`;
