/**
 * Returns the maximum value in an array of numbers
 * @param arr Array of numbers
 */

export const max = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('max() requires an array of numbers with at least one element');
  }

  let maximum: number = arr[0];

  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
  }

  return maximum;
};
