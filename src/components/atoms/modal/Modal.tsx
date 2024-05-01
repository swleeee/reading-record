import React from 'react';

import { Button } from '@/components';
import { useModal } from '@/hooks';
import CloseIcon from '@/assets/icon/ic_close.svg?react';
import * as S from './Modal.styled';

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  activeButtonName?: string;
  closeButtonName: string;
  title: string;
  activeFn?: () => void;
  closeFn: () => void;
}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  (
    {
      className,
      children,
      isDisabled,
      isLoading,
      activeButtonName,
      closeButtonName,
      title,
      activeFn,
      closeFn,
    },
    ref,
  ) => {
    const { modals } = useModal();
    // NOTE: 'ref' 속성에 접근하기 위해 any 사용 (다른 방법 모색 필요!)
    const currentModals = modals.filter(
      ({ component }) => (component as any).ref === ref,
    );

    return (
      <S.Modal
        className={className}
        ref={ref}
        aria-modal="true"
        isShow={currentModals[0].isShow}
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
          <main>{children}</main>
          <S.ButtonWrapper>
            <Button
              label={closeButtonName}
              styleType="secondary"
              sizeType="md"
              onClick={closeFn}
            />
            {activeButtonName && activeFn && (
              <Button
                isDisabled={isDisabled}
                isLoading={isLoading}
                label={activeButtonName}
                styleType="primary"
                sizeType="md"
                onClick={activeFn}
              />
            )}
          </S.ButtonWrapper>
        </S.ModalWrapper>
      </S.Modal>
    );
  },
);

export default Modal;

Modal.displayName = 'Modal';
