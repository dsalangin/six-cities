import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Seting = {
  OffersCount: 5
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={Seting.OffersCount}/>
  </React.StrictMode>,
);
