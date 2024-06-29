import { atom } from 'recoil';

import type { ToastType } from '@/shared/model';

export const toastState = atom<ToastType[]>({
  key: 'toastState',
  default: [],
});
