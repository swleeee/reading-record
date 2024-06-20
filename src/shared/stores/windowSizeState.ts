import { atom, selector } from 'recoil';

export const windowSizeState = atom<{ width: number; height: number }>({
  key: 'windowSize',
  default: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
});

export const deviceState = selector({
  key: 'device',
  get: ({ get }) => {
    const windowWidth = get(windowSizeState).width;

    if (windowWidth < 768) return 'mobile';
    if (windowWidth < 992) return 'tablet';
    return 'desktop';
  },
});
