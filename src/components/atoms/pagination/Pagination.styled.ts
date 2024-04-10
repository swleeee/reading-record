import tw, { css, styled } from 'twin.macro';

export const Pagination = tw.div`flex h-[64px]`;

export const Wrapper = tw.div`flex justify-center items-center w-fit mx-auto my-0`;

export const arrowIcon = css`
  ${tw`w-[20px] h-[20px] tablet:(w-[24px] h-[24px]) desktop:(w-[28px] h-[28px])`}
`;

const mixinButton = css`
  ${tw`flex justify-center items-center w-[28px] h-[28px] rounded-[2px] tablet:(w-[32px] h-[32px]) desktop:(w-[40px] h-[40px])`}
`;

export const ArrowButton = styled.button`
  ${mixinButton};

  svg > g > path {
    ${tw`fill-gray400`}
  }

  &:not(:disabled):hover {
    ${tw`bg-brown50`}

    svg > g > path {
      ${tw`fill-gray600`}
    }
  }

  &:disabled {
    ${tw`opacity-50`}
  }
`;

export const NumberWrapper = tw.div`flex justify-center items-center`;

export const NumberButton = styled.button<{ isCurrentPage: boolean }>`
  ${({ isCurrentPage }) => css`
    ${mixinButton}
    ${tw`m-body-r12 tablet:t-body-r13 desktop:d-body-r14`}
    ${isCurrentPage
      ? tw`text-brown600 bg-brown200`
      : tw`text-gray600 bg-mobile`}

    &:not(:disabled):hover {
      ${!isCurrentPage && tw`bg-brown50`};
    }
  `}
`;
