import { mean, square, sum } from '../index';
const variance = (arr: number[]) => {
  let meanValue: number = mean(arr);
  let squaredDifferences = arr.map((element) => {
    return square(element - meanValue);
  });

  return sum(squaredDifferences) / arr.length;
};

export default variance;
