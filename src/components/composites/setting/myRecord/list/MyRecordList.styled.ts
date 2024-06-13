import tw, { css } from 'twin.macro';

export const RecordList = tw.section`flex flex-wrap gap-x-[16px] gap-y-[20px] px-[8px] py-[12px]`;

export const link = css`
  ${tw`relative flex w-full min-h-[120px] rounded-[4px] px-[12px] py-[8px] bg-white shadow-light_md hover:bg-brown50 tablet:w-[300px] desktop:w-[400px]`}
`;

export const bookThumbnail = css`
  ${tw`absolute top-[-12px] w-[80px] h-[116px] rounded-[4px] shadow-light_xl`}
`;

export const BookContentWrapper = tw.div`flex flex-col ml-[88px]`;

export const Title = tw.span`m-body-m15 tablet:t-body-m15 desktop:d-body-m17`;

export const Author = tw.span`flex-1 m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const DateTime = tw.time`m-body-r12 text-gray300 tablet:t-body-r12 desktop:d-body-r14`;

export const BookThumbnailSkeleton = css`
  ${tw`absolute top-[-12px] w-[80px] rounded-[4px] shadow-light_xl`}
`;
