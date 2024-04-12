import React from 'react';
import { atom } from 'recoil';

const modalState = atom<
  { isShow: boolean; component: React.ReactElement<HTMLDialogElement> }[]
>({
  key: 'modalState',
  default: [],
});

export { modalState };
