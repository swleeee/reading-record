import { useRecoilValue } from 'recoil';

import { toastState } from '@/stores';
import ToastItem from './item/ToastItem';
import * as S from './Toast.styled';

const Toast = () => {
  const toasts = useRecoilValue(toastState);

  return (
    <S.Toast>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </S.Toast>
  );
};

export default Toast;
