import { BOOK_READING_STATUS_OPTIONS } from '@/shared/constants';

const findReadingStatusOption = (
  status: (typeof BOOK_READING_STATUS_OPTIONS)[number]['key'],
) => BOOK_READING_STATUS_OPTIONS.find((option) => option.key === status);

export const getBookReadingStatus = (
  readingStartDate: string | null,
  readingEndDate: string | null,
) => {
  if (readingStartDate && readingEndDate)
    return findReadingStatusOption('completed');

  if (readingStartDate) return findReadingStatusOption('ongoing');

  return findReadingStatusOption('pending');
};
