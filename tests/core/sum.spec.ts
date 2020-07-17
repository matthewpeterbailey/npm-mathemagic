import { sum } from '../../src/index';

test('Sum calculates the correct sum for numbers up to 2.d.p', () => {
  let numbers = [1, 2.25, 3.56, 4.19];
  expect(sum(numbers)).toEqual(11);
});

test('Sum should handle empty array', () => {
  expect(() => {
    sum([]);
  }).toThrow(Error('sum() requires an array of numbers with at least one element'));
});
