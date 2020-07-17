import { intersect } from '../../../src/index';

test('Line segments intersect', () => {
  let result = {
    atPoint: { x: 0, y: 0 },
    onLine1: true,
    onLine2: true,
    intersects: true,
  };
  expect(intersect({ x: -1, y: -1 }, { x: 1, y: 1 }, { x: -1, y: 1 }, { x: 1, y: -1 })).toEqual(result);
});

test('Line segments do not intersect but the intersect would lie on a segment if the lines were lengthened', () => {
  let result = {
    atPoint: { x: 0, y: 0 },
    onLine1: false,
    onLine2: true,
    intersects: false,
  };
  expect(intersect({ x: -1, y: -1 }, { x: -0.5, y: -0.5 }, { x: -1, y: 1 }, { x: 1, y: -1 })).toEqual(result);
});

test('Line segments do not intersect but the lines would intersect if lengthened, although the intersect does not lie on either segment', () => {
  let result = {
    atPoint: { x: 0, y: 0 },
    onLine1: false,
    onLine2: false,
    intersects: false,
  };
  expect(intersect({ x: -1, y: -1 }, { x: -0.5, y: -0.5 }, { x: -1, y: 1 }, { x: -0.5, y: 0.5 })).toEqual(result);
});

test('Line segments do not intersect but the lines would intersect if lengthened, although the intersect does not lie on either segment', () => {
  let result = {
    atPoint: { x: NaN, y: NaN },
    onLine1: false,
    onLine2: false,
    intersects: false,
  };
  expect(intersect({ x: -1, y: -1 }, { x: -1, y: 1 }, { x: 1, y: -1 }, { x: 1, y: 1 })).toEqual(result);
});
