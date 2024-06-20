import tw, { css } from 'twin.macro';

export const Layout = tw.main`flex flex-col justify-center items-center min-w-[320px] w-[calc(100% - 320px)] max-w-[475px] mx-auto pt-[60px] px-[24px] pb-[20px] tablet:pb-[60px]`;

export const logoLink = css`
  ${tw`mb-[50px]`}
`;

export const logo = css`
  ${tw`w-[168px] h-[72px]`}
`;

export const Section = tw.section`w-full rounded-[4px] tablet:(px-[28px] py-[32px] bg-white shadow-light_md)`;

export const Title = tw.h2`mb-[32px] m-body-sb16 tablet:t-body-sb16 desktop:d-body-sb18`;
