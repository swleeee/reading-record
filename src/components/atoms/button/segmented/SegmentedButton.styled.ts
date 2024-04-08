import tw, { css, styled } from 'twin.macro';

export const SegmentButtonGroup = tw.div`flex border border-black rounded-[4px] w-fit`;

export const SegmentButton = styled.button<{
  isSelected: boolean;
  indexType: 'first' | 'last' | 'remainder';
}>`
  ${({ isSelected, indexType }) => css`
    ${tw`flex items-center gap-x-4  px-[14px] py-[8px] not-last-of-type:border-r border-r-black`}

    ${isSelected ? tw`bg-brown200` : tw`bg-white hover:bg-brown50`}
    ${indexType === 'first'
      ? tw`rounded-l-[4px]`
      : indexType === 'last' && tw`rounded-r-[4px]`}
  `}
`;

export const SegmentButtonLabel = tw.span`m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const checkIcon = (isSelected: boolean) => css`
  ${tw`w-16 h-16`}

  & > g > path {
    ${isSelected ? tw`fill-brown800` : tw`fill-gray300`}
  }
`;
