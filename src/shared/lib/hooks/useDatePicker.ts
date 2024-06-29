import { useState } from 'react';
import dayjs from 'dayjs';

import type { DateViewMode, SelectOptionType } from '@/shared/model';

const makeCalendarDates = (
  date: dayjs.Dayjs,
  startDate: number,
  endDate: number,
) =>
  Array.from({ length: endDate - startDate + 1 }, (_, i) =>
    dayjs(`${date.year()}-${date.month() + 1}-${startDate + i}`),
  );

const useDatePicker = (
  selectedDate: dayjs.Dayjs | null,
  selectDate: (date: dayjs.Dayjs) => void,
  handleDateViewModeSelect: (mode: DateViewMode) => () => void,
  handlePopupOpenStateChange: (state: boolean) => () => void,
) => {
  const [initDate, setInitDate] = useState(selectedDate ?? dayjs());

  const prevMonth = initDate.subtract(1, 'M');
  const prevMonthDaysInMonth = prevMonth.daysInMonth();

  const prevMonthDates = makeCalendarDates(
    prevMonth,
    prevMonthDaysInMonth - initDate.startOf('month').day() + 1,
    prevMonthDaysInMonth,
  );

  const currentMonthDates = makeCalendarDates(
    initDate,
    1,
    initDate.daysInMonth(),
  );

  const nextMonthDates = makeCalendarDates(
    initDate.add(1, 'M'),
    1,
    42 - prevMonthDates.length - currentMonthDates.length,
  );

  const handleDateSelect = (date: dayjs.Dayjs) => () => {
    setInitDate(date);
    selectDate(date);
    handlePopupOpenStateChange(false)();
  };

  const handleMonthYearSelect = (unit: 'y' | 'M', value: number) => () => {
    setInitDate(initDate.set(unit, value));
    handleDateViewModeSelect('date')();
  };

  const handleOtherDateView =
    (mode: DateViewMode, type: 'prev' | 'next') => () => {
      const plusMinus = type === 'prev' ? -1 : 1;

      switch (mode) {
        case 'date':
          setInitDate(initDate.add(1 * plusMinus, 'M'));
          break;

        case 'month':
          setInitDate(initDate.add(1 * plusMinus, 'y'));
          break;

        case 'year':
          setInitDate(initDate.add(12 * plusMinus, 'y'));
          break;
      }
    };

  const handleOptionSelect = (option: SelectOptionType) => () => {
    handleDateViewModeSelect(option.key as DateViewMode)();
  };

  return {
    initDate,
    dates: [...prevMonthDates, ...currentMonthDates, ...nextMonthDates],
    handleDateSelect,
    handleMonthYearSelect,
    handleOtherDateView,
    handleOptionSelect,
  };
};

export default useDatePicker;
