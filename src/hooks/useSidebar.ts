import React, { useRef } from 'react';
import { useRecoilState } from 'recoil';

import { sidebarState } from '@/stores';

export const useSidebar = () => {
  const sidebarRef = useRef<HTMLDialogElement>(null);

  const [sidebar, setSidebar] = useRecoilState(sidebarState);

  const openSidebar = (component: React.ReactNode) => () => {
    document.body.style.cssText = 'overflow-y: hidden';

    setSidebar({ isShow: true, component });
  };

  const closeSidebar = () => {
    setSidebar({ ...sidebar, isShow: false });

    const closeTime = setTimeout(() => {
      setSidebar({ isShow: false, component: null });
    }, 1000);

    document.body.style.cssText = 'overflow: overlay';

    return () => clearTimeout(closeTime);
  };

  return {
    sidebarRef,
    sidebar,
    openSidebar,
    closeSidebar,
  };
};
