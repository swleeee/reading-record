import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AuthProvider } from './auth/AuthProvider';
import { ThemeProvider } from './theme/ThemeProvider';

interface ProvidersProps {
  children: ReactNode;
  client: QueryClient;
}

export const Providers = ({ children, client }: ProvidersProps) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={client}>
          <RecoilRoot>
            <ReactQueryDevtools />
            {children}
          </RecoilRoot>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
