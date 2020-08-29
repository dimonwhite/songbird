import React from 'react';
import './spinner.scss';
import vinyl from './assets/img/loader.svg';

const Spinner = () => (
  <div className="spinner_wrap">
    <img className="spinner" src={vinyl.url} alt="spinner" />
  </div>
);

export default Spinner;
