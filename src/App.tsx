import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from './theme';
import AppRoutes from './routes';
import { AuthWrapper } from './Authentication/AuthProvider';

function App() {
  return (
    <AuthWrapper>
      <ChakraProvider theme={theme}>
          <AppRoutes />
        </ChakraProvider>
  </AuthWrapper>
  );
}

export default App;
