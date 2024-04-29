export function isValidAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false

  const lookup: Record<string, number> = {}
  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1
  }

  for (let char of str2) {
    if (!lookup[char]) return false
    lookup[char]--
  }

  return true
}