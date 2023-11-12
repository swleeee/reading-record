import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from './router';
import GlobalStyles from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router />
  </React.StrictMode>,
);
