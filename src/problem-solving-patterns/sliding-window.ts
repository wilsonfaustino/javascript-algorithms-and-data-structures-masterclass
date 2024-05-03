/**
 * Calculates the maximum sum of a subarray of a given length in an array.
 *
 * @param arr - The input array of numbers.
 * @param num - The length of the subarray.
 * @returns The maximum sum of the subarray, or null if the input array is too short.
 */
export function maxSubarraySum(arr: number[], num: number): number | null {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

/**
 * Calculates the minimum length of a subarray whose sum is greater than or equal to a target value.
 *
 * @param arr - The input array of numbers.
 * @param target - The target sum.
 * @returns The minimum length of the subarray, or 0 if no such subarray exists.
 */
export function minSubArrayLen(arr: number[], target: number): number {
  let minLength = Infinity;
  let start = 0;
  let end = 0;
  let sum = 0;

  while (start < arr.length) {
    // If the current sum is less than the target, expand the window by moving the end pointer
    if (sum < target && end < arr.length) {
      sum += arr[end];
      end++;
    }
    // If the current sum is greater than or equal to the target, update the minimum length and contract the window by moving the start pointer
    else if (sum >= target) {
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    }
    // If the current sum is less than the target and we have reached the end of the array, break the loop
    else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}
