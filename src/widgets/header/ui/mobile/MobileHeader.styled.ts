import tw, { css, styled } from 'twin.macro';

export const MobileHeader = tw.div`sticky top-0 flex justify-center items-center h-[50px] border-b border-b-light-grey-400 bg-white z-HEADER dark:dark-bg-base`;

export const logoLink = css`
  ${tw`m-headline-1 tablet:t-headline-1 labtop:d-headline-1`}
`;

export const logo = css`
  ${tw`w-[96px] h-[28px]`}

  path {
    ${tw`dark:fill-dark-brown-400`}
  }
`;

export const SidebarButton = styled.button<{ isShow: boolean }>`
  ${({ isShow }) => css`
    ${tw`absolute top-1/2 right-[10px] -translate-y-1/2`}
    ${!isShow ? tw`animate-fadeIn` : tw`animate-fadeOut`}
  `}
`;

export const iconStyle = css`
  & > g > path {
    ${tw`dark:fill-white`}
  }
`;
