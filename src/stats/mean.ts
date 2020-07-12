import sum from '../core/sum';
const mean = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('Mean requires an array with at least one element');
  }

  return sum(arr) / arr.length;
};

export default mean;
