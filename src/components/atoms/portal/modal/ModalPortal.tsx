import { useRecoilValue } from 'recoil';

import { modalState } from '@/stores';
import MemorizedPortal from '../Portal';
import * as S from './ModalPortal.styled';

const ModalPortal = () => {
  const modals = useRecoilValue(modalState);

  return (
    <MemorizedPortal isMounted={!!modals.length} container="#modal">
      {modals?.map(({ component }, i) => (
        <S.Dim key={i}>{component}</S.Dim>
      ))}
    </MemorizedPortal>
  );
};

export default ModalPortal;
