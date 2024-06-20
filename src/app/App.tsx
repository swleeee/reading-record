import ReactDOM from 'react-dom/client';
import 'react-loading-skeleton/dist/skeleton.css';

import { ModalPortal, Toast } from '@/shared/ui';
import { queryClient } from '@/shared/lib';
import { Router } from './routers/Router';
import GlobalStyles from './styles/GlobalStyles';
import { Providers } from './providers/Providers';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers client={queryClient}>
    <GlobalStyles />
    <Toast />
    <ModalPortal />
    <Router />
  </Providers>,
);
