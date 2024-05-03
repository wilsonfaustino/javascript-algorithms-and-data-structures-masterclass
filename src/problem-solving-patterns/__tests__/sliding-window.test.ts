import { maxSubarraySum, minSubArrayLen } from "../sliding-window";

describe('Sliding Window - maxSubarraySum', () => {
  it('should return the maximum sum of n consecutive elements in the array', () => {
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
    expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
    expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
    expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
    expect(maxSubarraySum([], 4)).toBe(null);
  });
});

describe('Sliding Window - minSubArrayLen', () => {
  it('should return the minimum length of a contiguous subarray of which the sum is greater than or equal to the target', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toBe(2);
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toBe(2);
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toBe(1);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)).toBe(3);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)).toBe(5);
    expect(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)).toBe(2);
    expect(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)).toBe(0);
  });
});
