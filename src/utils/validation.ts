import dayjs from 'dayjs';

import { ERROR_MESSAGE } from '@/constants';

export const getBirthDateValid = (year: string, month: string, day: string) => {
  if (!year && !month && !day) return true;
  const date = `${year}-${month}-${day}`;
  const formattedDate = dayjs(date, 'YYYY-MM-DD', true);

  return formattedDate.isValid();
};

export const getBirthErrorMessage = (
  key: 'year' | 'month' | 'day',
  value: string,
) => {
  switch (key) {
    case 'year': {
      if (+value < 1900 || +value > new Date().getFullYear()) {
        return ERROR_MESSAGE.INVALID_YEAR;
      }
      break;
    }
    case 'month':
      if (+value < 1 || +value > 12) {
        return ERROR_MESSAGE.INVALID_MONTH;
      }

      break;
    case 'day':
      if (+value < 1 || +value > 31) {
        return ERROR_MESSAGE.INVALID_DAY;
      }

      break;
  }

  return;
};
