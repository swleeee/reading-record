export const BOOK_SEARCH_DROPDOWN_OPTIONS = [
  { key: 'title', label: '제목' },
  { key: 'isbn', label: 'ISBN' },
  { key: 'publisher', label: '출판사' },
  { key: 'person', label: '인명' },
];

export const BOOK_REVIEW_DROPDOWN_OPTIONS = [
  { key: 'like', label: '좋아요순' },
  { key: 'recent', label: '최신순' },
];

export const POPULAR_BOOK_DATE_FILTER_OPTIONS = [
  { key: 'week', label: 'Week' },
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
];

export const MY_RECORD_STATUS_OPTIONS = [
  { key: 'ongoing', label: '읽기 중' },
  { key: 'completed', label: '읽기 완료' },
];

export const BOOK_READING_STATUS_OPTIONS = [
  { key: 'pending', label: '읽기 전' },
  ...MY_RECORD_STATUS_OPTIONS,
];

export const DATE_PICKER_VIEW_MODE_OPTIONS = [
  { key: 'month', label: 'Month' },
  { key: 'year', label: 'Year' },
];

export const GENDER_OPTIONS = [
  { key: '', label: '선택안함' },
  { key: 'm', label: '남자' },
  { key: 'w', label: '여자' },
];

export const TERMS_DATE_OPTIONS = [{ key: '20240424', label: '2024.04.24' }];

export const PRIVACY_DATE_OPTIONS = [{ key: '20240424', label: '2024.04.24' }];

export const RECORD_CONTENT_PUBLIC_OPTIONS = [
  { key: 'private', label: '비공개' },
  { key: 'public', label: '공개' },
];
