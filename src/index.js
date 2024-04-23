import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';
import { CategoriesContextProvider } from './context/categories.context';
import { CartProvider } from './context/cart.context';
import { store } from './store/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <CategoriesContextProvider>
      <CartProvider>
         <App /> 
      </CartProvider>
      </CategoriesContextProvider>
    </BrowserRouter>
  </Provider>
    
  </React.StrictMode>,
  rootElement
);