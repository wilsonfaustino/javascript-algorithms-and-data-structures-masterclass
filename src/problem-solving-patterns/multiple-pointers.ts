/**
 * Finds the first pair of numbers in a sorted array that sum to zero.
 *
 * @param arr - The sorted array of numbers.
 * @returns An array containing the first pair of numbers that sum to zero, or `undefined` if no such pair exists.
 *
 * @example
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3]) // returns [-3, 3]
 * sumZero([-2, 0, 1, 3]) // returns undefined
 * sumZero([-4, -3, -2, 1, 2, 5]) // returns [-2, 2]
 */
export function sumZero(arr: number[]): number[] | undefined {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

/**
 * Counts the unique values in a sorted array.
 *
 * @param arr - The sorted array of numbers.
 * @returns The count of unique values in the array.
 *
 * @example
 *
 * countUniqueValues([1, 1, 2, 3, 3, 4, 5, 5, 5, 6]) // returns 6
 * countUniqueValues([1, 1, 1, 1, 1, 2]) // returns 2
 * countUniqueValues([-2, -1, -1, 0, 1]) // returns 4
 */
export function countUniqueValues(arr: number[]): number {
  if (arr.length <= 1) return arr.length;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
// Alternative implementation using Set
function countUniqueValues2(arr: number[]): number {
  if (arr.length === 0) return 0;

  const uniqueValues = new Set<number>([...arr]);

  return uniqueValues.size;
}

/**
 * Calculates if there is a pair of values in a sorted array of integers where the average of the pair equals the target average.
 *
 * @param arr - The sorted array of integers.
 * @param target - The target average.
 * @returns True if there is a pair of values that matches the target average, false otherwise.
 */
export function averagePair(arr: number[], target: number): boolean {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

/**
 * Checks if a string is a subsequence of another string.
 *
 * @param {string} str1 - The string to check for subsequence.
 * @param {string} str2 - The string in which to check.
 * @returns {boolean} - Returns true if str1 is a subsequence of str2, false otherwise.
 *
 * @example
 * isSubsequence('abc', 'acb'); // returns false
 * isSubsequence('abc', 'ahbgdc'); // returns true
 */
export function isSubsequence(str1: string, str2: string): boolean {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) {
      return true;
    }

    j++;
  }

  return false;
}
