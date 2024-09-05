// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

