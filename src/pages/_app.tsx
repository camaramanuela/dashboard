import { AppProps } from 'next/dist/shared/lib/router/router';
import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../contexts/SideBarDrawerContext';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
