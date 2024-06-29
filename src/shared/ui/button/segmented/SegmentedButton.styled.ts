import tw, { css, styled } from 'twin.macro';

export const SegmentButtonGroup = tw.div`flex border border-light-grey-600 rounded-[4px] w-fit dark:border-dark-grey-400`;

export const SegmentButton = styled.button<{
  isSelected: boolean;
  indexType: 'first' | 'last' | 'remainder';
}>`
  ${({ isSelected, indexType }) => css`
    ${tw`flex items-center gap-x-[4px] px-[14px] py-[8px] not-last-of-type:border-r border-r-light-grey-600 dark:border-r-dark-grey-400 tablet:gap-x-[6px]`}

    ${isSelected
      ? tw`bg-light-brown-400 dark:bg-dark-brown-600`
      : tw`bg-white dark:dark-bg-grouped-base hover:(bg-light-brown-50 dark:bg-dark-grey-250)`}
    ${indexType === 'first'
      ? tw`rounded-l-[3px]`
      : indexType === 'last' && tw`rounded-r-[3px]`}
  `}
`;

export const SegmentButtonLabel = tw.span`m-body-r12 whitespace-nowrap dark:text-white tablet:t-body-r12 desktop:d-body-r14`;

export const checkIcon = (isSelected: boolean) => css`
  ${tw`w-16 h-16`}

  & > g > path {
    ${isSelected
      ? tw`fill-light-brown-700 dark:fill-dark-brown-300`
      : tw`fill-light-grey-400 dark:fill-dark-grey-500`}
  }
`;
