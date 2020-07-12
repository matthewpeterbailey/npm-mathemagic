import { areaFromRadius } from '../../../src/index';

test('Area from radius function', () => {
  expect(areaFromRadius(3)).toEqual(28.274333882308138);
  expect(areaFromRadius(-3)).toEqual(28.274333882308138);
});
