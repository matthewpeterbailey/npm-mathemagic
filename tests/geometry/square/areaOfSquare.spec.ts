import { square } from '../../../src/index';

test('Perimeter from radius function', () => {
  expect(square(2)).toEqual(4);
  expect(square(-12)).toEqual(144);
});
