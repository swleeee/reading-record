import { useRecoilValue } from 'recoil';

import { sidebarState } from '@/stores';
import MemorizedPortal from '../Portal';
import * as S from './SidebarPortal.styled';

const SidebarPortal = () => {
  const sidebar = useRecoilValue(sidebarState);

  return (
    <MemorizedPortal isMounted={!!sidebar.component} container="#sidebar">
      <S.Dim>{sidebar.component}</S.Dim>
    </MemorizedPortal>
  );
};

export default SidebarPortal;
