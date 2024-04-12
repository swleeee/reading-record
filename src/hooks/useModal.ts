import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';

import { modalComponentState } from '@/stores';

export const useModal = (changeShowStatus?: (isShow: boolean) => void) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [modalComponents, setModalComponents] =
    useRecoilState(modalComponentState);

  const openModal = (component: React.ReactNode) => () => {
    document.body.style.cssText = 'overflow-y: hidden';

    setModalComponents([...modalComponents, component]);
  };

  const closeModal = () => {
    changeShowStatus && changeShowStatus(false);

    const newModalComponents = [...modalComponents];
    newModalComponents.pop();
    const closeTimeId = setTimeout(() => {
      setModalComponents(newModalComponents);
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
    modalComponents,
    openModal,
    closeModal,
  };
};
