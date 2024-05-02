/**
 * Calculates the maximum sum of a subarray of a given length in an array.
 * @param arr - The input array of numbers.
 * @param num - The length of the subarray.
 * @returns The maximum sum of the subarray, or null if the input array is too short.
 */
export function maxSubarraySum(arr: number[], num: number): number | null{
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
