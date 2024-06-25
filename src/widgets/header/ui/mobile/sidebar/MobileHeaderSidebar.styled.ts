import tw, { css, styled } from 'twin.macro';

export const Sidebar = styled.aside<{ isShow: boolean }>`
  ${({ isShow }) => css`
    ${isShow ? tw`animate-openSidebar` : tw`animate-closeSidebar`}
    ${tw`fixed w-[300px] h-[100vh] bg-white duration-300 dark:dark-bg-grouped-base`}
  `}
`;

export const logo = css`
  ${tw`w-[128px] h-[40px]`}

  path {
    ${tw`dark:fill-light-brown-400`}
  }
`;

export const CloseButton = tw.button`absolute top-[12px] right-[10px]`;

export const ContentWrapper = tw.div`px-[8px] py-[12px] bg-light-grey-50 dark:dark-bg-elevated`;

export const Header = tw.div`relative flex justify-center items-center h-[50px] bg-light-grey-50 dark:dark-bg-elevated`;

export const UserInfo = tw.div`flex flex-col items-center`;

export const UserProfile = css`
  ${tw`w-[64px] h-[64px] mr-0 mb-[16px]`}
`;

export const UserName = tw.span`mb-[12px] m-body-m14 dark:text-white`;

export const logoLink = css`
  ${tw`m-headline-1 tablet:t-headline-1 labtop:d-headline-1`}
`;

export const LoginLink = tw.a`inline-flex gap-x-[4px] m-body-sb16 dark:text-light-grey-400`;

export const arrowForwardIcon = css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-light-grey-400`}
  }
`;

export const Navbar = styled.nav`
  & > ul > li {
    ${tw`px-[8px] py-[6px]`}
  }
`;

export const navLink = (isSelected: boolean) => css`
  ${tw`inline-flex items-center w-full h-[48px] rounded-[4px] px-[12px] m-body-m14 cursor-pointer hover:(bg-light-brown-50 dark:bg-light-grey-600)`}
  ${isSelected
    ? tw`text-light-brown-700 dark:text-light-brown-400`
    : tw`text-light-grey-800 dark:text-white`}
`;

export const iconStyle = css`
  & > g > path {
    ${tw`dark:fill-white`}
  }
`;
