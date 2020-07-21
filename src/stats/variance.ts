import { mean } from './mean';
import { square } from '../geometry/square/square';
import { sum } from '../core/sum';

/**
 * Returns the varaince of an array of numbers
 * @param arr Array of numbers
 */

export const variance = (arr: number[]) => {
  const meanValue: number = mean(arr);
  const squaredDifferences = arr.map((element) => {
    return square(element - meanValue);
  });

  return sum(squaredDifferences) / arr.length;
};
