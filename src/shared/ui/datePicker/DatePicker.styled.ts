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
    ${tw`w-full h-[36px] rounded-full hover:(bg-light-brown-50 dark:bg-dark-brown-800)`}
    ${isSelected
      ? tw`text-white bg-light-brown-400 dark:(bg-dark-brown-600)`
      : tw`text-light-grey-200 dark:text-dark-grey-700`}
  `}
`;

export const MonthYearNavButton = tw.button`rounded-full hover:(bg-light-brown-50 dark:bg-dark-grey-250)`;

export const openCloseIcon = css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-light-grey-400 dark:fill-dark-grey-500`}
  }
`;

export const DateLabelWrapper = tw.div`flex items-center gap-x-[2px]`;

export const DateLabel = tw.h5`m-body-m15 dark:text-white tablet:t-body-m15 desktop:d-body-m17`;

export const ToggleButton = tw.button`rounded-full hover:(bg-light-brown-50 dark:bg-dark-grey-250)`;

export const DateList = tw.ul`grid grid-cols-[repeat(7, 1fr)] gap-y-[4px]`;

export const DateItem = tw.li`flex justify-center items-center w-[36px] h-[36px] m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;

export const Week = styled(DateItem)`
  ${tw`text-light-grey-500 dark:text-dark-grey-600`}
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
        ? tw`text-light-brown-400 dark:text-dark-brown-600`
        : tw`text-black dark:text-white`
      : tw`text-light-grey-400 dark:text-dark-grey-500`}
    ${isSelected
      ? tw`text-white bg-light-brown-400 dark:(bg-dark-brown-600)`
      : tw`hover:(bg-light-brown-50 dark:bg-dark-brown-800)`}
  `}
`;

export const DateButton = tw.button`w-full h-full`;

export const datePickerInput = css`
  & > input {
    ${tw`w-[180px] cursor-pointer`}
  }
`;
