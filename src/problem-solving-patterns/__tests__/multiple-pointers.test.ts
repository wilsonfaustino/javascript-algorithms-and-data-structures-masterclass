import { averagePair, countUniqueValues, sumZero } from "../multiple-pointers";

describe('Multiple Pointers - sumZero', () => {
  it('should return the first pair of numbers that sum to zero', () => {
    expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3]);
    expect(sumZero([-2, 0, 1, 3])).toBeUndefined();
    expect(sumZero([1, 2, 3])).toBeUndefined();
  })
});

describe('Multiple Pointers - countUniqueValues', () => {
  it('should return the number of unique values in the array', () => {
    expect(countUniqueValues([1, 1, 1, 1, 1, 2])).toBe(2);
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
    expect(countUniqueValues([])).toBe(0);
  })
});

describe('Multiple Pointers - averagePair', () => {
  it('should return true if there is a pair of values in the array where the average of the pair equals the target average', () => {
    expect(averagePair([1,2,3],2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    expect(averagePair([], 4)).toBe(false);
  })
});
