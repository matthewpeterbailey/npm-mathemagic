/**
 * Returns the sum of all numbers in an array
 * @param arr Array of numbers
 */

export const sum = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('sum() requires an array of numbers with at least one element');
  }

  let sumOfNumbers: number = 0;

  for (const iterator of arr) {
    sumOfNumbers += iterator;
  }
  return sumOfNumbers;
};
