import tw, { css } from 'twin.macro';

export const LoginLayout = tw.main`flex flex-col justify-center items-center min-w-[270px] w-[calc(100% - 270px)] max-w-[320px] h-full mx-auto `;

export const logoLink = css`
  ${tw`mb-[50px]`}
`;

export const logo = css`
  ${tw`w-[168px] h-[72px]`}
`;

export const LoginContents = tw.div`flex flex-col items-center w-full`;
