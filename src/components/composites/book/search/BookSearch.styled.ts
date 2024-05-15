import tw, { css } from 'twin.macro';

export const BookSearchSection = tw.section`flex justify-center gap-x-[4px] mb-[64px]`;

export const filterDropdown = css`
  ${tw`w-[84px] tablet:w-[92px] desktop:w-[100px]`}

  & > button {
    ${tw`h-[44px]`}
  }
`;

export const bookSearch = css`
  ${tw`w-full`}
`;
