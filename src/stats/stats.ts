import { mean, mode, median, min, max, sum, variance, sd } from '../index';

const stats = (arr: number[]) => {
  return {
    mean: mean(arr),
    median: median(arr),
    mode: mode(arr),
    min: min(arr),
    max: max(arr),
    sum: sum(arr),
    variance: variance(arr),
    standardDevation: sd(arr),
  };
};

export default stats;
