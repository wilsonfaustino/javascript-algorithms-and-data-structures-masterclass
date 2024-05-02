export function sameFrequencyV1(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// Refactoring
export function sameFrequency(arr1: number[], arr2: number[]) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1: Record<string, number> = {};
  const frequencyCounter2: Record<string, number> = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (
      frequencyCounter2[frequencyCounter1[key] ** 2] !== frequencyCounter1[key]
    ) {
      return false;
    }
  }
  return true;
}

export function sameFrequencyOfNumbers(num1: number, num2: number) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  const frequencyCounter: Record<string, number> = {};
  for (let char of strNum1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (let char of strNum2) {
    if (!frequencyCounter[char]) {
      return false;
    }
    frequencyCounter[char] -= 1;
  }
  return true;
}

/**
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param args
 * @returns boolean - true if there are duplicates, false otherwise
 * @example areThereDuplicates(1, 2, 3) // false
 */
export function areThereDuplicates(...args: any[]) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) {
      return true;
    }
  }

  return false;
}
