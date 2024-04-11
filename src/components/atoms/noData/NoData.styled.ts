import tw, { css } from 'twin.macro';

export const NoData = tw.section`flex flex-col items-center gap-y-[8px]`;

export const noDataIcon = css`
  ${tw`w-[64px] h-[64px]`}

  & > g > path {
    ${tw`fill-gray600`}
  }
`;

export const NoDataDescription = tw.p`m-body-r12 text-gray-600 text-center whitespace-pre-line tablet:t-body-r12 desktop:d-body-r14`;
