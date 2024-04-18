import tw, { css, styled } from 'twin.macro';

export const TabList = tw.ul`flex border-b border-gray200 px-[8px]`;

export const TabItem = styled.li<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`mx-[4px] px-[12px]`}
    ${isSelected && tw`border-b-2 border-solid border-b-brown400`}
  `}
`;

export const TabButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`h-[inherit] pb-[8px] m-body-m15 tablet:t-body-m15 desktop:d-body-m17`}
    ${isSelected
      ? tw`text-brown400`
      : tw`hover:text-brown400 active:text-brown400`}
  `}
`;

export const TabPanel = tw.section`mt-[8px] px-[24px]`;
