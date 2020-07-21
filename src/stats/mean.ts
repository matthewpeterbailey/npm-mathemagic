import { sum } from '../core/sum';

/**
 * Returns the mean of an array of numbers
 * @param arr Array of numbers
 */

export const mean = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('Mean requires an array with at least one element');
  }

  return sum(arr) / arr.length;
};
