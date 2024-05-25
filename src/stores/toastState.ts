import { atom } from 'recoil';

import type { ToastType } from '@/types';

export const toastState = atom<ToastType[]>({
  key: 'toastState',
  default: [],
});
