import React from 'react';
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from './theme';
import ProductPages from './routes';
import AuthProvider from './Authentication/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
          <ProductPages />
        </ChakraProvider>
  </AuthProvider>
  );
}

export default App;
