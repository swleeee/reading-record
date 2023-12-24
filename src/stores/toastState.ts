import {
  atom,
  selector,
  RecoilState,
  RecoilValueReadOnly,
  SetterOrUpdater,
  useRecoilCallback,
} from 'recoil';

import type { ToastType } from '@/types';

export const toastState = atom<ToastType[]>({
  key: 'toastState',
  default: [],
});
