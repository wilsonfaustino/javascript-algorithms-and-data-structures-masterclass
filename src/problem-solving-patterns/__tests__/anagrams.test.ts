import { isValidAnagram } from "../anagrams";

describe('Anagrams', () => {
  it('should return true if two strings are anagrams', () => {
    expect(isValidAnagram('anagram', 'nagaram')).toBe(true);
    expect(isValidAnagram('rat', 'tar')).toBe(true);
    expect(isValidAnagram('awesome', 'awesom')).toBe(false);
    expect(isValidAnagram('qwerty', 'qeywrt')).toBe(true);
    expect(isValidAnagram('texttwisttime', 'timetwisttext')).toBe(true);
  });
});