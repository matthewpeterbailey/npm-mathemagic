const linesIntersect = (line1Start: Point, line1End: Point, line2Start: Point, line2End: Point) => {
  const result: ResultObject = {
    atPoint: {
      x: NaN,
      y: NaN,
    },
    onLine1: false,
    onLine2: false,
    intersects: false,
  };

  const denominator =
    (line2End.y - line2Start.y) * (line1End.x - line1Start.x) -
    (line2End.x - line2Start.x) * (line1End.y - line1Start.y);

  if (denominator === 0) {
    return result;
  }

  let a = line1Start.y - line2Start.y;
  let b = line1Start.x - line2Start.x;
  const numerator1 = (line2End.x - line2Start.x) * a - (line2End.y - line2Start.y) * b;
  const numerator2 = (line1End.x - line1Start.x) * a - (line1End.y - line1Start.y) * b;
  a = numerator1 / denominator;
  b = numerator2 / denominator;

  // extend lines infinitely in both directions, to find intersect:
  result.atPoint.x = line1Start.x + a * (line1End.x - line1Start.x);
  result.atPoint.y = line1Start.y + a * (line1End.y - line1Start.y);

  // if line1 is a segment and line2 is infinite, they intersect if:
  if (a > 0 && a < 1) {
    result.onLine1 = true;
  }
  // if line2 is a segment and line1 is infinite, they intersect if:
  if (b > 0 && b < 1) {
    result.onLine2 = true;
  }

  // lines intersect if point lies on both line segments
  if (result.onLine1 && result.onLine2) {
    result.intersects = true;
  }

  return result;
};

interface ResultObject {
  atPoint: Point;
  onLine1: boolean;
  onLine2: boolean;
  intersects: boolean;
}

interface Point {
  x: number;
  y: number;
}

export default linesIntersect;
