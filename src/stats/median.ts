const median = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error('Median requires an array with at least one element');
  }

  arr.sort((a, b) => a - b);

  let result: number;

  if (arr.length % 2 === 0) {
    result = arr[arr.length / 2 - 1] + (arr[arr.length / 2] - arr[arr.length / 2 - 1]) / 2;
  } else {
    result = arr[(arr.length - 1) / 2];
  }

  return result;
};

export default median;
