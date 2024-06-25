import tw, { css, styled } from 'twin.macro';

export const Modal = styled.dialog<{ isShow: boolean }>`
  ${({ isShow }) => css`
    ${tw`relative block w-[calc(100% - 36px)] max-w-[800px] mx-auto rounded-[4px] bg-white shadow-light_lg dark:(dark-bg-elevated shadow-dark_lg)`}
    ${isShow ? tw`animate-show` : tw`animate-hide`}
  `}
`;

export const ModalWrapper = tw.div`p-[24px]`;

export const Header = tw.header`flex justify-between items-center mb-[20px]`;

export const Title = tw.h4`m-body-sb16 dark:text-white tablet:t-body-sb16 desktop:d-body-sb18`;

export const CloseButton = styled.button`
  ${tw`flex justify-center items-center w-[24px] h-[24px] rounded-full p-[4px] bg-light-grey-100 dark:bg-light-grey-400`}

  &:hover > svg {
    ${tw`scale-125 transition-all duration-200`}
  }
`;

export const ButtonWrapper = tw.footer`flex justify-end items-center gap-x-[12px] mt-[28px]`;
