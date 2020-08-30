import React from 'react';
import ReactDOM from 'react-dom';

import './base.scss';

import App from '@/components/app';
import FilmsProvider from '@/components/films-provider/films-provider';

const Main = () => (
  <FilmsProvider>
    <App />
  </FilmsProvider>
);

ReactDOM.render(<Main />, document.querySelector('#app'));
