const max = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('max() requires an array of numbers');
  }

  let maximum: number = arr[0];

  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  return maximum;
};

export default max;
