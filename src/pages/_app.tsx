import { AppProps } from 'next/dist/shared/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from 'react-query'
import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContext';
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from '../styles/theme';
import { makeServer } from '../services/mirage';
import { queryClient } from '../services/querClient';

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  ) 
}

export default MyApp
