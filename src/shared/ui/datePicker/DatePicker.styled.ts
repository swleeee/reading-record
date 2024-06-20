import tw, { css, styled } from 'twin.macro';

export const CalendarWrapper = tw.section`flex flex-col gap-y-[4px] w-[274px] h-[328px]`;

export const CalendarHeader = tw.header`flex justify-center items-center gap-x-[8px] mb-[12px]`;

export const viewModeButtonGroup = css`
  ${tw`mb-[16px]`}
`;

export const MonthYearList = tw.ul`grid grid-cols-[repeat(4, 1fr)] gap-x-[6px] gap-y-[8px]`;

export const MonthYearItem = tw.li`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const MonthButton = styled.button<{ isSelected: boolean }>`
  ${({ isSelected }) => css`
    ${tw`w-full h-[36px] rounded-full hover:bg-brown50`}
    ${isSelected ? tw`text-white bg-brown400` : tw`text-black`}
  `}
`;

export const MonthYearNavButton = tw.button`rounded-full hover:bg-brown50`;

export const openCloseIcon = css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-gray300`}
  }
`;

export const DateLabelWrapper = tw.div`flex items-center gap-x-[2px]`;

export const DateLabel = tw.h5`m-body-m15 tablet:t-body-m15 desktop:d-body-m17`;

export const ToggleButton = tw.button`rounded-full hover:bg-brown50`;

export const DateList = tw.ul`grid grid-cols-[repeat(7, 1fr)] gap-y-[4px]`;

export const DateItem = tw.li`flex justify-center items-center w-[36px] h-[36px] m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;

export const Week = styled(DateItem)`
  ${tw`text-gray400`}
`;

interface DateProps {
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
}

export const Date = styled(DateItem)<DateProps>`
  ${({ isCurrentMonth, isSelected, isToday }) => css`
    ${tw`rounded-full`}
    /* NOTE: 순서 중요 */
    ${isCurrentMonth
      ? isToday
        ? tw`text-brown400`
        : tw`text-black`
      : tw`text-gray-300`}
    ${isSelected ? tw`text-white bg-brown400` : tw`hover:bg-brown50`}
  `}
`;

export const DateButton = tw.button`w-full h-full`;

export const datePickerInput = css`
  & > input {
    ${tw`w-[180px] cursor-pointer`}
  }
`;
