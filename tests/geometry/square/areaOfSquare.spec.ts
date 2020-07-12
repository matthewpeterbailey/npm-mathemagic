import { areaOfSquare, square } from '../../../src/index';

test('Square and Area of Square functions are equal', () => {
  expect(square(3)).toEqual(areaOfSquare(3));
});

test('Perimeter from radius function', () => {
  expect(areaOfSquare(2)).toEqual(4);
  expect(areaOfSquare(-12)).toEqual(144);
});
