const mode = (arr: number[]) => {
  if (arr.length === 0) {
    throw new Error('Mode requires an array with at least one element');
  }

  const frequency: number[] = []; // array of frequency.
  let maxFreq: number = 0; // holds the max frequency.
  let modesArray: number[] = [];

  for (const element of arr) {
    frequency[element] = (frequency[element] || 0) + 1; // increment frequency.

    if (frequency[element] > maxFreq) {
      maxFreq = frequency[element]; // update max.
      modesArray = []; // reset modes array because we have a new maximum
    }

    if (frequency[element] === maxFreq) {
      modesArray.push(element);
    }
  }

  return {
    frequency: maxFreq,
    modes: modesArray,
  };
};

export default mode;
