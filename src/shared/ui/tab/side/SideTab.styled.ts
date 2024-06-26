import tw, { css, styled } from 'twin.macro';

export const TabContainer = tw.div`flex gap-x-[40px]`;

export const TabList = tw.ul`flex flex-col gap-y-[36px] min-h-[calc(100vh - 200px)] border-t border-light-grey-50 rounded-[4px] py-[18px] bg-white tablet:min-w-[180px] desktop:min-w-[240px]`;

export const TabItem = styled.li<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${isSelected && tw`border-r-2 border-solid border-r-light-brown-400`}
  `}
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`w-full min-h-[36px] px-[24px] text-left m-body-m15 tablet:t-body-m15 desktop:d-body-m17`}
    ${isSelected
      ? tw`text-light-brown-400`
      : tw`hover:text-light-brown-400 active:text-light-brown-400`}
  `}
`;

export const TabPanel = tw.section`flex-1`;
