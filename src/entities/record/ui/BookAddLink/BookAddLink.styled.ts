import tw, { css } from 'twin.macro';

export const bookAddLink = tw`flex flex-col items-center gap-y-[4px] mx-[24px] rounded-[4px] py-[20px] max-w-[375px] bg-white shadow-light_sm dark:dark-bg-grouped-base hover:(bg-light-brown-50 dark:bg-dark-grey-250) tablet:mx-0`;

export const addIcon = css`
  ${tw`w-[64px] h-[64px]`}

  & > g > path {
    ${tw`dark:fill-white`}
  }
`;

export const MainDescription = tw.span`m-body-r14 dark:text-white`;

export const SubDescription = tw.span`m-body-r12 text-light-grey-500 dark:text-dark-grey-600`;
