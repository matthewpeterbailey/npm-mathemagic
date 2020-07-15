import { variance } from '../../src/index';

test('Variance of simple array should be correct', () => {
  expect(variance([4, 9, 11, 12, 17, 5, 8, 12, 14])).toBeGreaterThanOrEqual(15.505);
  expect(variance([4, 9, 11, 12, 17, 5, 8, 12, 14])).toBeLessThanOrEqual(15.515);
});
