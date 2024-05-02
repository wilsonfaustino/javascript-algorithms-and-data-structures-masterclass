import { areThereDuplicates, sameFrequency, sameFrequencyOfNumbers } from '../frequency-counter-pattern';

describe("frequency counter pattern", () => {
  it("should return false if the arrays have different lengths", () => {
    expect(sameFrequency([1, 2, 3], [1, 2])).toBe(false);
  });

  it("should return false if the second array does not contain the square of the elements of the first array", () => {
    expect(sameFrequency([1, 2, 3], [1, 4, 4])).toBe(false);
  });

  it("should return true if the second array contains the square of the elements of the first array", () => {
    expect(sameFrequency([1, 2, 3, 2], [1, 4, 9, 4])).toBe(true);
  });
});

describe("frequency counter pattern - Same Frequency of numbers", () => {
  it("should return false if the numbers have different lengths", () => {
    expect(sameFrequencyOfNumbers(123, 12)).toBe(false);
  });

  it("should return true if the numbers have the same frequency", () => {
    expect(sameFrequencyOfNumbers(3589578, 5879385)).toBe(true);
  });

  it("should return true if the second number contains the same frequency of numbers as the first number", () => {
    expect(sameFrequencyOfNumbers(123, 321)).toBe(true);
  });
});

describe("frequency counter pattern - areThereDuplicates", () => {
  it("should return false if there are no duplicates", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
  });

  it("should return true if there are duplicates", () => {
    expect(areThereDuplicates(1, 2, 2)).toBe(true);
    expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
  });
});
