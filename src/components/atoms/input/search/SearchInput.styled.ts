import tw, { css } from 'twin.macro';

export const Form = tw.form`tablet:(flex justify-center)`;

export const searchInput = css`
  ${tw`relative tablet:(flex-1 max-w-[600px])`}

  & > input {
    ${tw`pr-[44px] w-full`}
  }
`;

export const SearchButton = tw.button`absolute top-1/2 right-[11px] -translate-y-1/2 flex justify-center items-center w-[28px] h-[28px] hover:(rounded-full bg-brown50)`;
