import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';
import { CategoriesContextProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
      <CategoriesContextProvider>
      <CartProvider>
         <App /> 
      </CartProvider>
      </CategoriesContextProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);