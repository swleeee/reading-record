import tw, { css, styled } from 'twin.macro';

export const Dropdown = tw.div`relative shrink-0 rounded-[4px]`;

export const DropdownToggleButton = tw.button`flex justify-between items-center gap-x-[4px] border border-solid border-light-grey-500 rounded-[4px] px-[11px] py-[9px] w-full h-[40px] bg-white dark:(border-dark-grey-400 dark-bg-grouped-base)`;

export const Label = tw.span`m-body-r13 dark:text-dark-grey-800 tablet:t-body-r13 desktop:d-body-r15`;

export const Placeholder = tw.span`m-body-r12 text-light-grey-400 dark:text-dark-grey-600 tablet:t-body-r12 desktop:d-body-r14`;

export const iconStyle = css`
  & > g > path {
    ${tw`dark:fill-dark-grey-800`}
  }
`;

export const DropdownOptionWrapper = tw.ul`absolute top-[calc(100%+4px)] w-full border border-light-grey-500 rounded-[4px] bg-white overflow-hidden dark:(border-dark-grey-400 dark-bg-grouped-base)`;

export const DropdownOption = tw.li`text-light-grey-200 dark:text-dark-grey-700 hover:(bg-light-brown-50 dark:bg-dark-grey-250)`;

export const OptionButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`flex justify-between items-center px-[10px] py-[8px] w-full h-full `};

    & > span {
      ${tw`m-body-r12 text-left tablet:t-body-r12 desktop:d-body-r14`}
      ${isSelected && tw`text-light-brown-400 dark:text-dark-brown-600`}
    }

    & > svg {
      ${tw`w-[16px] h-[16px]`}
      ${!isSelected && tw`hidden`}

      & > g > path {
        ${tw`fill-light-brown-400 dark:fill-dark-brown-600`}
      }
    }
  `}
`;
