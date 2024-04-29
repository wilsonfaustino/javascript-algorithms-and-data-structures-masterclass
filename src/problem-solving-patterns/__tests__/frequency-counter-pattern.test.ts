import { sameFrequency } from "../frequency-counter-pattern";

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