import tw, { css, styled } from 'twin.macro';

export const TabContainer = tw.div`border-b border-light-grey-300 bg-white dark:(border-dark-grey-700 dark-bg-base)`;

export const TabList = styled.ul`
  ${tw`flex px-[24px] whitespace-nowrap overflow-x-auto tablet:(max-w-[1360px] mx-auto)`}

  ::-webkit-scrollbar {
    ${tw`hidden`}
  }
`;

export const TabItem = styled.li<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`mx-[4px] px-[12px]`}
    ${isSelected &&
    tw`border-b-2 border-solid border-b-light-brown-400 dark:border-b-dark-brown-600`}
  `}
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`h-[50px] m-body-m15 tablet:t-body-m15 desktop:d-body-m17`}
    ${isSelected
      ? tw`text-light-brown-400 dark:text-dark-brown-600`
      : tw`dark:text-white hover:(text-light-brown-400 dark:text-dark-brown-600) active:(text-light-brown-500 dark:text-dark-brown-600)`}
  `}
`;
