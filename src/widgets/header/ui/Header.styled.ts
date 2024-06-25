import tw, { css, styled } from 'twin.macro';

export const Header = tw.header`sticky top-0 border-b border-b-light-grey-300 bg-white z-HEADER dark:dark-bg-base`;

export const Wrapper = tw.div`flex items-center w-full h-[60px] px-[24px] py-[10px] tablet:(max-w-[1360px] mx-auto)`;

export const logoLink = css`
  ${tw`mr-[50px] t-body-sb16 labtop:d-body-sb18`}
`;

export const logo = css`
  ${tw`w-[75px] h-[28px]`}

  path {
    ${tw`dark:fill-dark-brown-500`}
  }
`;

export const Navbar = styled.nav`
  ${tw`flex-1`}

  & > ul {
    ${tw`flex gap-x-[20px]`}
  }

  & > ul > li {
    ${tw`px-[8px] py-[6px]`}
  }
`;

export const navLink = (isSelected: boolean) => css`
  ${tw`inline-flex items-center t-body-m14 cursor-pointer hover:(text-light-brown-400 dark:text-dark-brown-500) desktop:d-body-m16`}
  ${isSelected
    ? tw`text-light-brown-400 dark:text-dark-brown-500`
    : tw`text-light-grey-800 dark:text-white`}
`;

export const UserInfo = tw.div`flex items-center gap-x-[4px]`;

export const UserName = tw.span`t-body-r14 dark:text-white desktop:d-body-r16`;
