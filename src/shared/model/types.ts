import React from 'react';

export interface ToastType {
  id: string;
  type: 'success' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
}

export type DeviceType = 'mobile' | 'tablet' | 'desktop';
export type DateViewMode = 'date' | 'month' | 'year';

export interface SelectOptionType {
  key: string;
  label: string;
}

export interface TabType extends SelectOptionType {
  content: React.ReactNode;
}

export type CheckboxGroupType<T extends string> = { [key in T]: boolean };

export interface PaginationType {
  totalCount: number;
  totalPages: number;
}

export type ThemeModeType = 'light' | 'dark';
