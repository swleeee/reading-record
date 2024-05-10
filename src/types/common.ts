export type ButtonActionType = 'button' | 'submit' | 'reset';
export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'tertiaryPrimary'
  | 'tertiaryGray'
  | 'tertiaryBlue'
  | 'tertiaryRed';
export type ButtonSizeType = 'sm' | 'md' | 'lg' | 'full';

export type LinkStyleType = 'tertiaryGray' | 'tertiaryBrown';
export type LinkSizeType = 'sm' | 'md' | 'lg';

export interface ToastType {
  id: string;
  type: 'success' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
}

export type DeviceType = 'mobile' | 'tablet' | 'labtop';
export type DateViewMode = 'date' | 'month' | 'year';

export interface SelectOptionType {
  key: string;
  label: string;
}

export interface TabType extends SelectOptionType {
  content: React.ReactNode;
}

export type CheckboxGroupType<T extends string> = { [key in T]: boolean };

export interface Pagination {
  totalCount: number;
  totalPages: number;
}
