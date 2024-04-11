import tw, { css } from 'twin.macro';

export const RecordDataSection = tw.section`max-w-[768px] mx-auto px-[24px] desktop:max-w-[1200px]`;

export const RecordHeader = tw.header`flex justify-between items-center border-b border-b-gray100 pb-[4px]`;

export const RecordTitle = tw.h3`m-body-m14 tablet:t-body-m14 desktop:d-body-m16`;

export const filterDropdown = css`
  ${tw`w-[110px]`}
`;

export const RecordList = tw.article`flex flex-col gap-y-[4px] border-b border-b-gray100 px-[12px] py-[20px]`;

export const RecordItemHeader = tw.header`flex justify-between items-center`;

export const PersonInfo = tw.div`flex items-center gap-x-[4px]`;

export const UserName = tw.span`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const CreatedDate = tw.time`m-body-r12 text-gray300 tablet:t-body-r12 desktop:d-body-r14`;

export const RatingInfo = tw.div`flex gap-x-[2px]`;

export const ratingIcon = (isFilled: boolean) => css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-brown400`}
    ${!isFilled && tw`opacity-30`}
  }
`;

export const RecordItemContent = tw.p`m-body-r14 tablet:t-body-r14 desktop:d-body-r16`;

export const RecordItemFooter = tw.footer`flex justify-end w-full`;

export const LikeButton = tw.button`flex items-center gap-[4px]`;

export const likeIcon = css`
  ${tw`w-[16px] h-[16px]`}

  & > g > path {
    ${tw`fill-blue200`}
  }
`;

export const Like = tw.span`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;
