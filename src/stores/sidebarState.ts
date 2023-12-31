import React from 'react';
import { atom } from 'recoil';

const sidebarState = atom<{
  isShow: boolean;
  component: React.ReactNode | null;
}>({
  key: 'sidebar',
  default: {
    isShow: false,
    component: null,
  },
});

export { sidebarState };
