export function sameFrequencyV1(arr1: number[], arr2:number[]) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if(correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
// Refactoring
export function sameFrequency(arr1: number[], arr2:number[]) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1: Record<string, number> = {};
  const frequencyCounter2: Record<string, number> = {};
  for(let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for(let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for(let key in frequencyCounter1) {
    if(!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if(frequencyCounter2[frequencyCounter1[key] ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true; 
}