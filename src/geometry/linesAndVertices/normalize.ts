import { Point } from '../../core/point';

/**
 * Normalises a vector point so that it has a magnitude of 1
 * @param point Point to normalise
 */
export const normalize = ({ x, y }: Point): Point => {
  const mag = Math.sqrt(x * x + y * y);
  return { x: x / mag, y: y / mag };
};
