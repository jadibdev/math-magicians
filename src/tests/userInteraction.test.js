import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../components/Calculator';
import CalScreen from '../components/Screen';

test('click interactions are successfull', () => {
  const result = 0;
  render(
    <div>
      <CalScreen result={result} />
      <Calculator />
    </div>,
  );

  userEvent.click(screen.getByText('3'));
  expect(screen.getByText('3').innerHTML).toEqual('3');
});

test('AC button click works successfully', () => {
  const result = 0;
  render(
    <div>
      <CalScreen result={result} />
      <Calculator />
    </div>,
  );

  userEvent.click(screen.getByText('AC'));
  expect(screen.getByText('AC').innerHTML).toEqual('AC');
});
