import { sd } from '../../src/index';

test('Standard deviation of simple array should be correct', () => {
  expect(sd([4, 9, 11, 12, 17, 5, 8, 12, 14])).toBeGreaterThanOrEqual(3.9305);
  expect(sd([4, 9, 11, 12, 17, 5, 8, 12, 14])).toBeLessThanOrEqual(3.9405);
});
