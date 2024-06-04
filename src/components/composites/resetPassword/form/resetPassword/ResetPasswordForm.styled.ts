import tw, { css } from 'twin.macro';

export const Form = tw.form`max-w-[640px] mx-auto`;

export const labelContent = css`
  ${tw`mb-[36px]`}
`;

export const inputWrapper = css`
  ${tw`flex-1`}

  & > input {
    ${tw`w-full`}
  }
`;
