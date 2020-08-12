import React, { Component } from 'react';

import Header from '@/components/header';
import CurrentQuestion from '@/components/current-question';

import './app.scss';

export default class App extends Component {
  state = {
    score: 0,
  };

  render() {
    const { score } = this.state;

    return (
      <>
        <Header score={score} />
        <CurrentQuestion />
      </>
    );
  }
}
