import tw, { css, styled } from 'twin.macro';

export const MobileHeader = tw.div`relative flex justify-center items-center h-[50px] border-b border-b-gray-300`;

export const Logo = tw.span`m-headline-1  tablet:t-headline-1 labtop:d-headline-1`;

export const SidebarButton = styled.button<{ isShow: boolean }>`
  ${({ isShow }) => css`
    ${tw`absolute top-[10px] right-[10px]`}
    ${!isShow ? tw`animate-fadeIn` : tw`animate-fadeOut`}
  `}
`;
