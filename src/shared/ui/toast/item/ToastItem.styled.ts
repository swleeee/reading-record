import tw, { css, styled } from 'twin.macro';

import type { ToastType } from '@/shared/model';

const TOAST_COLOR = {
  success: tw`border border-solid border-light-navy-500 bg-light-navy-50`,
  warning: tw`border border-solid border-light-red-500 bg-light-red-50`,
  info: tw`border border-solid border-light-brown-500 bg-light-brown-100`,
};

interface ToastItemProps {
  isClosing: boolean;
  hasTitle: boolean;
  type: ToastType['type'];
}

export const ToastItem = styled.div<ToastItemProps>(
  ({ isClosing, hasTitle, type }) => css`
    ${tw`grid [grid-template-columns: 24px 1fr] gap-x-[12px] items-center w-[320px] rounded-[5px] mb-[6px] p-[15px]`}
    ${TOAST_COLOR[type]}
    ${hasTitle && tw`gap-y-[6px]`}
    ${isClosing ? tw`animate-fadeOut` : tw`animate-fadeIn`}

    & > svg {
      ${hasTitle && tw`row-span-2`}
    }
  `,
);

const SYMBOL_FILL_COLOR = {
  success: tw`fill-light-navy-500`,
  warning: tw`fill-light-red-500`,
  info: tw`fill-light-brown-500`,
};

export const toastSymbolIcon = (type: ToastType['type']) => css`
  ${tw`self-start w-[20px] h-[20px]`}

  & > g > path {
    ${SYMBOL_FILL_COLOR[type]}
  }
`;

export const ToastTitle = tw.div`m-body-m14 tablet:t-body-m14 labtop:d-body-m16`;

export const ToastMessage = tw.p`m-body-r12 whitespace-pre-wrap tablet:t-body-r12 labtop:d-body-r14`;
