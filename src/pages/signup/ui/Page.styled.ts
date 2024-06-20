import tw, { css } from 'twin.macro';

export const SignupLayout = tw.main`flex flex-col justify-center items-center mx-auto pt-[60px] px-[24px] pb-[20px] tablet:pb-[60px]`;

export const logoLink = css`
  ${tw`mb-[50px]`}
`;

export const logo = css`
  ${tw`w-[168px] h-[72px]`}
`;
