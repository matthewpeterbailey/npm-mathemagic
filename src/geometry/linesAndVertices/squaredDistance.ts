import { Point } from '../../core/point';

/**
 * Returns the squared euclidean distance between points a and b
 * @param a Point A
 * @param b Point B
 */
export const squaredDistance = (a: Point, b: Point): number => {
  const deltaX = b.x - a.x;
  const deltaY = b.y - a.y;
  return deltaX * deltaX + deltaY * deltaY;
};
