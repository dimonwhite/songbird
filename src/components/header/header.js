import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
  state = {
    activeElement: 1,
  };

  render() {
    const { activeElement } = this.state;

    return (
      <header className="header">
        Header
        {' '}
        {activeElement}
      </header>
    );
  }
}
