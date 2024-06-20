import { useEffect, useState } from 'react';

import { useToast } from '@/shared/lib';
import InfoIcon from '@/shared/assets/icon/ic_info.svg?react';
import WarningIcon from '@/shared/assets/icon/ic_warning.svg?react';
import SuccessIcon from '@/shared/assets/icon/ic_task_all.svg?react';
import type { ToastType } from '@/shared/model';
import * as S from './ToastItem.styled';

const TOAST_DURATION = 3000;
const TRANSITION_DURATION = 1200;

const ToastIconType = {
  success: <SuccessIcon css={S.toastSymbolIcon('success')} />,
  warning: <WarningIcon css={S.toastSymbolIcon('warning')} />,
  info: <InfoIcon css={S.toastSymbolIcon('info')} />,
};

export const ToastItem = ({
  id,
  duration = TOAST_DURATION,
  type,
  title,
  message,
}: ToastType) => {
  const [isClosing, setIsClosing] = useState(false);

  const { removeToast } = useToast();

  useEffect(() => {
    const existTimeout = setTimeout(() => {
      duration && setIsClosing(true);
    }, TOAST_DURATION);

    const expireToastTimeout = setTimeout(() => {
      removeToast(id);
    }, TOAST_DURATION + TRANSITION_DURATION);

    return () => {
      clearTimeout(existTimeout);
      clearTimeout(expireToastTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.ToastItem isClosing={isClosing} hasTitle={!!title} type={type}>
      {ToastIconType[type]}
      {title && <S.ToastTitle>{title}</S.ToastTitle>}
      <S.ToastMessage>{message}</S.ToastMessage>
    </S.ToastItem>
  );
};
