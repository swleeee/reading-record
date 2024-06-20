import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';

import { modalState } from '@/shared/stores';

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [modals, setModals] = useRecoilState(modalState);

  const openModal =
    (component: React.ReactElement<HTMLDialogElement>) => () => {
      document.body.style.cssText = 'overflow-y: hidden';

      setModals([...modals, { isShow: true, component }]);
    };

  const closeModal = () => {
    const newModalComponents = [...modals];
    const lastModals = newModalComponents.pop();

    if (!lastModals) return;

    setModals([
      ...newModalComponents,
      { isShow: false, component: lastModals.component },
    ]);
    const closeTimeId = setTimeout(() => {
      setModals(newModalComponents);
    }, 500);

    if (newModalComponents.length === 0) {
      document.body.style.cssText = 'overflow: overlay';
    }

    return () => {
      clearTimeout(closeTimeId);
    };
  };

  return {
    modalRef,
    modals,
    openModal,
    closeModal,
  };
};
