import tw, { css } from 'twin.macro';

export const profile = css`
  ${tw`w-[28px] h-[28px] rounded-full mr-[6px]`}

  & > path {
    ${tw`dark:fill-dark-grey-600`}
  }
`;
