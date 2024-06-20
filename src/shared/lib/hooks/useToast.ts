import { useRecoilState } from 'recoil';

import { toastState } from '@/shared/stores';
import type { ToastType } from '@/shared/model';

export function useToast() {
  const [toasts, setToasts] = useRecoilState(toastState);

  const addToast = (toast: Omit<ToastType, 'id'>) => {
    const id = `${new Date().getTime()}`;

    setToasts((prev) => [...prev, { ...toast, id }]);
  };

  const removeToast = (toastID: ToastType['id']) =>
    setToasts((prev) => prev.filter((toast) => toast.id !== toastID));

  return { toasts, addToast, removeToast };
}
