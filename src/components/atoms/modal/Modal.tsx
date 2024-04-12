import React from 'react';

import { Button } from '@/components';
import CloseIcon from '@/assets/icon/ic_close.svg?react';
import * as S from './Modal.styled';

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isShow: boolean;
  isDisabled: boolean;
  activeButtonName: string;
  closeButtonName: string;
  title: string;
  activeFn: () => void;
  closeFn?: () => void;
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className,
      children,
      isShow,
      isDisabled,
      activeButtonName,
      closeButtonName,
      title,
      activeFn,
      closeFn,
    },
    ref,
  ) => {
    return (
      <S.Modal
        className={className}
        ref={ref}
        aria-modal="true"
        isShow={isShow}
        tabIndex={0}
      >
        <S.ModalWrapper>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.CloseButton
              type="button"
              aria-label="close modal"
              onClick={closeFn}
            >
              <CloseIcon />
            </S.CloseButton>
          </S.Header>
          {children}
          <S.ButtonWrapper>
            <Button
              label={closeButtonName}
              styleType="secondary"
              sizeType="md"
              onClick={closeFn}
            />
            <Button
              isDisabled={isDisabled}
              label={activeButtonName}
              styleType="primary"
              sizeType="md"
              onClick={activeFn}
            />
          </S.ButtonWrapper>
        </S.ModalWrapper>
      </S.Modal>
    );
  },
);

export default Modal;

Modal.displayName = 'Modal';
