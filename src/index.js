import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from 'easy-peasy';
import store from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <Routes>
          <Route path='/*' Component={App} />
        </Routes>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);