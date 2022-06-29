/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Screen from './Screen';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <Screen />
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
