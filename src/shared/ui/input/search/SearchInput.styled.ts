import tw, { css } from 'twin.macro';

export const Form = tw.form`h-fit tablet:(flex justify-center max-w-[600px])`;

export const searchInput = css`
  ${tw`relative tablet:flex-1`}

  & > input {
    ${tw`pr-[44px] w-full`}
  }
`;

export const SearchButton = tw.button`absolute top-1/2 right-[11px] -translate-y-1/2 flex justify-center items-center w-[28px] h-[28px] hover:(rounded-full bg-light-brown-50)`;

export const iconStyle = css`
  & > g > path {
    ${tw`dark:fill-dark-grey-800`}
  }
`;
