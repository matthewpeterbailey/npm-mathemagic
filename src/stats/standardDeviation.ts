import { variance } from '../index';
const standardDeviation = (arr: number[]) => {
  return Math.sqrt(variance(arr));
};

export default standardDeviation;
