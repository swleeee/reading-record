import tw, { css } from 'twin.macro';

export const RecordSection = tw.section`rounded-[4px 4px 0 0] px-[12px] py-[10px] bg-white`;

export const RecordHeader = tw.header`flex justify-between items-center border-b border-b-gray100 pb-[4px]`;

export const RecordTitle = tw.h3`m-body-m14 tablet:t-body-m14 desktop:d-body-m16`;

export const filterDropdown = css`
  ${tw`w-[110px]`}
`;

export const noDataContainer = css`
  ${tw`px-[12px] py-[20px]`}
`;
