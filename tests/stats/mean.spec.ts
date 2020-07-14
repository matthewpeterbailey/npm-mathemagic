import { mean } from '../../src/index';

test('Mean of array (of decimals 2.d.p) with odd length is correct', () => {
  expect(mean([-2.4, -1.23, 0, 1.23, 2.4])).toEqual(0);
});

test('Mean of array (of integers) with even length is correct', () => {
  expect(mean([1, 2, 3, 4, 5, 6])).toEqual(3.5);
});

test('Mean should handle empty array', () => {
  expect(() => {
    mean([]);
  }).toThrow(Error('Mean requires an array with at least one element'));
});
