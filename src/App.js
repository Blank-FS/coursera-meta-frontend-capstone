import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
  return(
    <ChakraProvider>
      <div class="body">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
