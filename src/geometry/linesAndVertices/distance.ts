import { squaredDistance } from './squaredDistance';
import { Point } from '../../core/point';

/**
 * Returns the euclidean distance between points a and b
 * @param a Point A
 * @param b Point B
 */
export const distance = (a: Point, b: Point): number => {
  return Math.sqrt(squaredDistance(a, b));
};
