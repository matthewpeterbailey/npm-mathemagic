import { mean } from './mean';
import { mode } from './mode';
import { median } from './median';
import { min } from '../core/min';
import { max } from '../core/max';
import { sum } from '../core/sum';
import { variance } from './variance';
import { standardDeviation } from './standardDeviation';

/**
 * Returns basic statistics of a given array
 * @param arr Array of numbers
 */

export const stats = (arr: number[]) => {
  return {
    mean: mean(arr),
    median: median(arr),
    mode: mode(arr),
    min: min(arr),
    max: max(arr),
    sum: sum(arr),
    variance: variance(arr),
    standardDevation: standardDeviation(arr),
  };
};
