/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item screen">
        <p>{this.props.counter}</p>
      </div>
    );
  }
}

Screen.defaultProps = { counter: 0 };

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Screen expression={this.props.expression} result={this.props.result} />
        <button type="button" className="item">
          AC
        </button>
        <button type="button" className="item">
          +/-
        </button>
        <button type="button" className="item">
          %
        </button>
        <button type="button" className="item orange">
          ÷
        </button>
        <button type="button" className="item">
          7
        </button>
        <button type="button" className="item">
          8
        </button>
        <button type="button" className="item">
          9
        </button>
        <button type="button" className="item orange">
          x
        </button>
        <button type="button" className="item">
          4
        </button>
        <button type="button" className="item">
          5
        </button>
        <button type="button" className="item">
          6
        </button>
        <button type="button" className="item orange">
          +
        </button>
        <button type="button" className="item">
          3
        </button>
        <button type="button" className="item">
          2
        </button>
        <button type="button" className="item">
          1
        </button>
        <button type="button" className="item orange">
          -
        </button>
        <button type="button" className="item zero">
          0
        </button>
        <button type="button" className="item dot">
          .
        </button>
        <button type="button" className="item equals orange">
          =
        </button>
      </div>
    );
  }
}

export default Calculator;