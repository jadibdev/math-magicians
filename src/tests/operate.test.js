import operate from '../logic/operate';

test('Adds successfully', () => {
  expect(parseInt(operate(1, 2, '+'), 10)).toStrictEqual(3);
});

test('Subtracts successfully', () => {
  expect(parseInt(operate(5, 5, '-'), 10)).toStrictEqual(0);
});

test('Multiplies successfully', () => {
  expect(parseInt(operate(8, 7, 'x'), 10)).toStrictEqual(56);
});

test('Divides successfully', () => {
  expect(parseInt(operate(10, 5, '÷'), 10)).toStrictEqual(2);
});
