import { min } from '../../src/index';

test('Min function', () => {
  let numbers = [100, 23, 44, 72, -10, -3, 209, 109, 1, 2, 3, 4];
  expect(min(numbers)).toEqual(-10);
});

test('Min should handle empty array', () => {
  expect(() => {
    min([]);
  }).toThrow(Error('min() requires an array of numbers with at least one element'));
});
