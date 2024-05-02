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
