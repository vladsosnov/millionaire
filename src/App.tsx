import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/shared.css';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/millionaire">
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};
