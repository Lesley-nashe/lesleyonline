import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from './theme';
import AppRoutes from './routes';
import AuthProvider from './Authentication/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
  </AuthProvider>
  );
}

export default App;
