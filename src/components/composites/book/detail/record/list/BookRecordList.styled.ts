import tw, { css } from 'twin.macro';

export const RecordSection = tw.section`max-w-[768px] mx-auto px-[24px] desktop:max-w-[1200px]`;

export const RecordHeader = tw.header`flex justify-between items-center border-b border-b-gray100 pb-[4px]`;

export const RecordTitle = tw.h3`m-body-m14 tablet:t-body-m14 desktop:d-body-m16`;

export const filterDropdown = css`
  ${tw`w-[110px]`}
`;
