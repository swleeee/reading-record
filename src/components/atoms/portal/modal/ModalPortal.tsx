import React from 'react';
import { useRecoilValue } from 'recoil';

import { modalComponentState } from '@/stores';
import Portal from '../Portal';
import * as S from './ModalPortal.styled';

const ModalPortal = () => {
  const modalComponents = useRecoilValue(modalComponentState);

  return (
    <Portal isMounted={!!modalComponents.length} container="#modal">
      {modalComponents?.map((component, i) => (
        <S.Dim key={i}>{component}</S.Dim>
      ))}
    </Portal>
  );
};

export default ModalPortal;
