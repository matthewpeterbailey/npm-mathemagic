const sum = (arr: number[]) => {
  let sumOfNumbers: number = 0;

  for (const iterator of arr) {
    sumOfNumbers += iterator;
  }
  return sumOfNumbers;
};

export default sum;
