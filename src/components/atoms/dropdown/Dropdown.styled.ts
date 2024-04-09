import tw, { css, styled } from 'twin.macro';

export const Dropdown = tw.div`relative shrink-0`;

export const DropdownToggleButton = tw.button`flex justify-between items-center gap-x-[4px] border border-gray300 rounded-[4px] px-[11px] py-[9px] w-full h-[40px] bg-white`;

export const Label = tw.span`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const Placeholder = tw.span`m-body-r12 text-gray300 tablet:t-body-r12 desktop:d-body-r14`;

export const DropdownOptionWrapper = tw.ul`absolute top-[calc(100%+4px)] w-full border border-gray300 rounded-[4px] bg-white overflow-hidden`;

export const DropdownOption = tw.li`hover:bg-brown50 `;

export const OptionButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`flex justify-between items-center px-[10px] py-[8px] w-full h-full `};

    & > span {
      ${tw`m-body-r12 text-left tablet:t-body-r12 desktop:d-body-r14`}
      ${isSelected && tw`text-brown400`}
    }

    & > svg {
      ${tw`w-[16px] h-[16px]`}
      ${!isSelected && tw`hidden`}

      & > g > path {
        ${tw`fill-brown400`}
      }
    }
  `}
`;
