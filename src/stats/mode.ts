const mode = (arr: number[]) => {
  let frequency: number[] = []; // array of frequency.
  let maxFreq: number = 0; // holds the max frequency.
  let modes: number[] = [];

  for (var i in arr) {
    frequency[arr[i]] = (frequency[arr[i]] || 0) + 1; // increment frequency.

    if (frequency[arr[i]] > maxFreq) {
      maxFreq = frequency[arr[i]]; // update max.
      modes = []; // reset modes array because we have a new maximum
    }

    if (frequency[arr[i]] === maxFreq) {
      modes.push(arr[i]);
    }
  }

  return {
    frequency: maxFreq,
    modes: modes,
  };
};

export default mode;
