export type ButtonActionType = 'button' | 'submit' | 'reset';
export type ButtonStyleType = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizeType = 'sm' | 'md' | 'lg' | 'full';

export interface ToastType {
  id: string;
  type: 'success' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
}

export type DeviceType = 'mobile' | 'tablet' | 'labtop';

export interface SelectOptionType {
  key: string;
  label: string;
}
