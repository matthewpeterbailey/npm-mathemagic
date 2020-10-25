import { cross } from '../../src/index';

test('Cross product', () => {
  const vectorA: number[] = [100, 23, 44];
  const vectorB: number[] = [-3, 10, 4];
  expect(cross(vectorA,vectorB)).toEqual([-348,-532,1069]);
});

test('Cross product should handle bad length array', () => {
  expect(() => {
    cross([1,2],[2,1]);
  }).toThrow(Error('cross() requires two array of numbers with three elements'));
});
