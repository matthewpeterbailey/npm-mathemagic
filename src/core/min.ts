const min = (arr: number[]): number => {
  if (arr.length === 0) {
    throw new Error('min() requires an array of numbers with at least one element');
  }

  let minimum: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }

  return minimum;
};

export default min;
