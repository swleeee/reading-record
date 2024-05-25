import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { ScrollToTop } from './components';
import { windowSizeState } from './stores';

// NOTE: _app.tsx, 404.tsx
const DEFAULT_MODULES: Record<string, { [key: string]: any }> =
  import.meta.glob('/src/pages/(_app|404).tsx', { eager: true });

// NOTE: 일반 컴포넌트
const COMPONENT_MODULES: Record<string, { [key: string]: any }> =
  import.meta.glob('/src/pages/**/[a-z[]*.tsx', { eager: true });

// TODO: 변수 리팩토링
const defaultRoutes = Object.keys(DEFAULT_MODULES).reduce<{
  [key: string]: any;
}>((routes, modulePath) => {
  const key = modulePath.replace(/\/src\/pages\/|\.tsx$/g, '');
  return { ...routes, [key]: DEFAULT_MODULES[modulePath].default };
}, {});

const components = Object.keys(COMPONENT_MODULES).map((modulePath) => {
  const path = modulePath
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');

  return { path, component: COMPONENT_MODULES[modulePath].default };
});

export const Router = () => {
  const setWindowSize = useSetRecoilState(windowSizeState);

  const App = defaultRoutes?.['_app'] || Fragment;
  const NotFound = defaultRoutes?.['404'] || Fragment;

  useEffect(() => {
    const handleScreenResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleScreenResize);

    return () => {
      window.removeEventListener('resize', handleScreenResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route element={<App />}>
            {components.map(({ path, component: Component = Fragment }) => (
              <Route index key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={NotFound} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};
