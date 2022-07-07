import calculate from '../logic/calculate';

describe('Calculates successfully given an object and a button', () => {
  let result = {
    total: 0,
    next: 0,
  };

  result = calculate(result, '1');
  result = calculate(result, '+');
  result = calculate(result, '3');
  result = calculate(result, '=');

  test('Calculates and keeps track of next', () => {
    expect(result.total).toBe('4');
  });
});

test('Calculates successfully given a null data object and AC button', () => {
  expect(calculate({
    total: null,
    next: null,
    operation: null,
  }, 'AC')).toStrictEqual({
    total: null,
    next: null,
    operation: null,
  });
});
