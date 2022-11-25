import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offer';
import {Provider} from 'react-redux';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={offers}/>
    </Provider>
  </React.StrictMode>,
);
