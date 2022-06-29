/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Screen from './Screen';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    this.setState((state) => calculate(state, e.target.innerText));
  };

  render() {
    const { total, next, operation } = this.state;
    let result;

    if (next === null && operation === null && total === null) {
      result = 0;
    }

    if (next !== null && operation === null && total === null) {
      result = next;
    }

    if (next === null && operation !== null && total !== null) {
      result = total + operation;
    }

    if (next !== null && operation !== null && total !== null) {
      result = total + operation + next;
    }

    if (next === null && operation === null && total !== null) {
      result = total;
    }
    return (
      <div className="container">
        <Screen result={result} />
        <button type="button" className="item" onClick={this.handleClick}>
          AC
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          +/-
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          %
        </button>
        <button type="button" className="item orange" onClick={this.handleClick}>
          ÷
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          7
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          8
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          9
        </button>
        <button type="button" className="item orange" onClick={this.handleClick}>
          x
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          4
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          5
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          6
        </button>
        <button type="button" className="item orange" onClick={this.handleClick}>
          +
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          3
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          2
        </button>
        <button type="button" className="item" onClick={this.handleClick}>
          1
        </button>
        <button type="button" className="item orange" onClick={this.handleClick}>
          -
        </button>
        <button type="button" className="item zero" onClick={this.handleClick}>
          0
        </button>
        <button type="button" className="item dot" onClick={this.handleClick}>
          .
        </button>
        <button type="button" className="item equals orange" onClick={this.handleClick}>
          =
        </button>
      </div>
    );
  }
}

export default Calculator;
