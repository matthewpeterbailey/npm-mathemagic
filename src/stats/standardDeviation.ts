import { variance } from './variance';

/**
 * Returns the standard deviation of an array of numbers
 * @param arr Array of numbers
 */

export const standardDeviation = (arr: number[]) => {
  return Math.sqrt(variance(arr));
};
