import React, { Component } from 'react';

import './current-question.scss';

export default class CurrentQuestion extends Component {
  state = {
    descHidden: true,
  };

  render() {
    const { descHidden } = this.state;

    return (
      <div className="question">
        Question
        {' '}
        {descHidden}
      </div>
    );
  }
}
