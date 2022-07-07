import React, { useState } from 'react';
import Screen from './Screen';
import calculate from '../logic/calculate';
import Header from './Header';

const Calculator = () => {
  const [State, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const display = () => calculate(State, e.target.innerHTML);
    setState(display);
  };

  let result = 0;
  const { total, next, operation } = State;
  if (next === null && operation === null && total === null) {
    result = 0;
  }

  if (next !== null && total === null) {
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
    <div>
      <Header />
      <h2 id="calculator-cta">Let&apos;s do some Math:</h2>
      <div className="container">
        <Screen result={result} />
        <button type="button" className="item" onClick={handleClick}>
          AC
        </button>
        <button type="button" className="item" onClick={handleClick}>
          +/-
        </button>
        <button type="button" className="item" onClick={handleClick}>
          %
        </button>
        <button type="button" className="item orange" onClick={handleClick}>
          ÷
        </button>
        <button type="button" className="item" onClick={handleClick}>
          7
        </button>
        <button type="button" className="item" onClick={handleClick}>
          8
        </button>
        <button type="button" className="item" onClick={handleClick}>
          9
        </button>
        <button type="button" className="item orange" onClick={handleClick}>
          x
        </button>
        <button type="button" className="item" onClick={handleClick}>
          4
        </button>
        <button type="button" className="item" onClick={handleClick}>
          5
        </button>
        <button type="button" className="item" onClick={handleClick}>
          6
        </button>
        <button type="button" className="item orange" onClick={handleClick}>
          +
        </button>
        <button type="button" className="item" onClick={handleClick}>
          3
        </button>
        <button type="button" className="item" onClick={handleClick}>
          2
        </button>
        <button type="button" className="item" onClick={handleClick}>
          1
        </button>
        <button type="button" className="item orange" onClick={handleClick}>
          -
        </button>
        <button type="button" className="item zero" onClick={handleClick}>
          0
        </button>
        <button type="button" className="item dot" onClick={handleClick}>
          .
        </button>
        <button type="button" className="item equals orange" onClick={handleClick}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
