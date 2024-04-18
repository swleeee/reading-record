import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';

import { ModalPortal, SidebarPortal, Toast } from './components';
import { Router } from './router';
import { queryClient } from './services';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyles />
        <Toast />
        <SidebarPortal />
        <ModalPortal />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
);
