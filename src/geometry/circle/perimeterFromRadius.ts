/**
 * Returns the perimeter of a circle given the radius
 * @param radius Radius of circle
 */

export const perimeterFromRadius = (radius: number) => {
  return 2 * Math.PI * Math.abs(radius);
};
