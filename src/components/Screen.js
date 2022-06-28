/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="item screen">
        <p>{counter}</p>
      </div>
    );
  }
}

export default Screen;
