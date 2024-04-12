import React from 'react';
import { useRecoilValue } from 'recoil';

import { modalState } from '@/stores';
import Portal from '../Portal';
import * as S from './ModalPortal.styled';

const ModalPortal = () => {
  const modals = useRecoilValue(modalState);

  return (
    <Portal isMounted={!!modals.length} container="#modal">
      {modals?.map(({ component }, i) => (
        <S.Dim key={i}>{component}</S.Dim>
      ))}
    </Portal>
  );
};

export default ModalPortal;
