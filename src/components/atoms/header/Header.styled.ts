import tw, { css, styled } from 'twin.macro';

export const Header = tw.header`flex items-center w-full h-[60px] border-b border-b-gray100 px-[60px] py-[10px]`;

export const logo = css`
  ${tw`mr-[50px] t-body-sb16 labtop:d-body-sb18`}
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
  ${tw`inline-flex items-center t-body-m14 cursor-pointer hover:text-brown300 desktop:d-body-m16`}
  ${isSelected ? tw`text-brown400` : tw`text-gray300`}
`;

export const UserInfo = tw.div`flex items-center gap-x-[4px]`;

export const UserName = tw.span`t-body-r14 desktop:d-body-r16`;

export const defaultProfileIcon = css`
  ${tw`w-[28px] h-[28px]`}

  & > path:not(:first-of-type) {
    ${tw`fill-gray50`}
  }
`;
