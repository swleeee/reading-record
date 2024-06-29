import tw, { css } from 'twin.macro';

export const RecordItemContainer = tw.article`flex flex-col gap-y-[4px] border-b border-b-light-grey-400 px-[12px] py-[20px] dark:border-b-dark-grey-800`;

export const RecordItemHeader = tw.header`flex justify-between items-center`;

export const PersonInfo = tw.div`flex items-center gap-x-[4px]`;

export const UserName = tw.span`m-body-r13 dark:text-white tablet:t-body-r13 desktop:d-body-r15`;

export const CreatedDate = tw.time`m-body-r12 text-light-grey-400 dark:text-dark-grey-600 tablet:t-body-r12 desktop:d-body-r14`;

export const RatingInfo = tw.div`flex gap-x-[2px]`;

export const ratingIcon = (isFilled: boolean) => css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-light-brown-400 dark:fill-dark-brown-600`}
    ${!isFilled && tw`opacity-30`}
  }
`;

export const RecordItemContent = tw.p`m-body-r14 dark:text-white tablet:t-body-r14 desktop:d-body-r16`;

export const RecordItemFooter = tw.footer`flex justify-end w-full`;
