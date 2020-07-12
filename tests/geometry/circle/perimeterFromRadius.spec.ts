import { perimeterFromRadius } from '../../../src/index';

test('Perimeter from radius function', () => {
  expect(perimeterFromRadius(3)).toEqual(18.84955592153876);
  expect(perimeterFromRadius(-3)).toEqual(18.84955592153876);
});
