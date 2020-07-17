import { max } from '../../src/index';

test('Max function', () => {
  let numbers = [100, 23, 44, 72, -10, -3, 209, 109, 1, 2, 3, 4];
  expect(max(numbers)).toEqual(209);
});

test('Max should handle empty array', () => {
  expect(() => {
    max([]);
  }).toThrow(Error('max() requires an array of numbers with at least one element'));
});
