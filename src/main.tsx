import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-loading-skeleton/dist/skeleton.css';

import { AuthContextProvider } from './contexts';
import { ModalPortal, Toast } from './components';
import { Router } from './router';
import { queryClient } from './services';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ReactQueryDevtools />
        <GlobalStyles />
        <Toast />
        <ModalPortal />
        <Router />
      </RecoilRoot>
    </QueryClientProvider>
  </AuthContextProvider>,
);
