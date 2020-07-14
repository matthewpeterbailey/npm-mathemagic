import { median } from '../../src/index';

test('Median of array (of decimals 2.d.p) with odd length is correct', () => {
  expect(median([-2.4, -1.23, 0, 1.23, 2.4])).toEqual(0);
});

test('Median of array (of unsorted integers) with odd length is correct', () => {
  expect(median([5, 10, 11, -10, -2, 0, 9])).toEqual(5);
});

test('Median of array (of integers) with even length is correct', () => {
  expect(median([1, 2, 3, 4, 5, 6])).toEqual(3.5);
});

test('Median should handle empty array', () => {
  expect(() => {
    median([]);
  }).toThrow(Error('Median requires an array with at least one element'));
});
