import React from 'react';
import { atom } from 'recoil';

const modalComponentState = atom<React.ReactNode[]>({
  key: 'modalComponentState',
  default: [],
});

export { modalComponentState };
