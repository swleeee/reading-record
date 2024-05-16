import tw, { css, styled } from 'twin.macro';

export const TabContainer = tw.div`border-b border-gray200 px-[8px] bg-white`;

export const TabList = styled.ul`
  ${tw`flex px-[24px] whitespace-nowrap overflow-x-auto tablet:(max-w-[1360px] mx-auto)`}

  ::-webkit-scrollbar {
    ${tw`hidden`}
  }
`;

export const TabItem = styled.li<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`mx-[4px] px-[12px]`}
    ${isSelected && tw`border-b-2 border-solid border-b-brown400`}
  `}
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`h-[50px] m-body-m15 tablet:t-body-m15 desktop:d-body-m17`}
    ${isSelected
      ? tw`text-brown400`
      : tw`hover:text-brown400 active:text-brown400`}
  `}
`;
