import { mode } from '../../src/index';

test('Mode should find multiple modes and the maximum frequency', () => {
  let result = mode([1, 1, 2, 4, 5, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8]);
  expect(result.modes).toEqual([7, 8]);
  expect(result.frequency).toEqual(5);
});

test('Mode should handle negatives and decimals', () => {
  let result = mode([
    -1,
    -1,
    -1,
    -1,
    -1,
    -2,
    -4,
    5,
    7.5,
    7.5,
    7.5,
    7.5,
    7.5,
    8.19087656256,
    8.19087656256,
    8.19087656256,
    8.19087656256,
    8.19087656256,
  ]);
  expect(result.modes).toEqual([-1, 7.5, 8.19087656256]);
  expect(result.frequency).toEqual(5);
});

test('Mode should handle empty array', () => {
  expect(() => {
    mode([]);
  }).toThrow(Error('Mode requires an array with at least one element'));
});
