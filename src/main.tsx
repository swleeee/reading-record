import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { SidebarPortal, Toast } from './components';
import { Router } from './router';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyles />
      <Toast />
      <SidebarPortal />
      <Router />
    </RecoilRoot>
  </React.StrictMode>,
);
