export var mergeAnimations = [];
var originalArr = [];
export function mergeSort(originalArray, length, arr) {
  originalArr = originalArray;
  return beginMergeSort(originalArray, length, 0, originalArray.length);
}
function beginMergeSort(originalArray, length) {
  let arrayOne = [];
  let arrayTwo = [];
  let arrayLength = originalArray.length;
  if (arrayLength <= 1) {
    return originalArray;
  } else {
    //adding to array one
    for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
      let tempVal = originalArray[i];
      // mergeAnimations.push([[i], [tempVal]]);
      arrayOne.push(tempVal);
    }
    //adding to array two
    for (let i = Math.floor(arrayLength / 2); i < arrayLength; i++) {
      let tempVal = originalArray[i];
      // mergeAnimations.push([[i], [tempVal]]);
      arrayTwo.push(tempVal);
    }
    //recurse
    arrayOne = beginMergeSort(arrayOne, length);
    arrayTwo = beginMergeSort(arrayTwo, length);
  }
  return merge(arrayOne, arrayTwo);
}
//merge the two arrays
function merge(arrayOne, arrayTwo) {
  let mergedArray = [];
  let i = 0;
  while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
    if (arrayOne[0] > arrayTwo[0]) {
      mergeAnimations.push([[i + mergedArray.length], [arrayOne[0]]]);
      mergedArray.push(arrayTwo[0]);
      arrayTwo.shift();
    } else {
      mergeAnimations.push([[i + mergedArray.length], [arrayTwo[0]]]);
      mergedArray.push(arrayOne[0]);
      arrayOne.shift();
    }
  }
  i = 0;
  while (arrayOne.length !== 0) {
    mergeAnimations.push([[i + mergedArray.length], [arrayOne[0]]]);
    mergedArray.push(arrayOne[0]);
    arrayOne.shift();
  }
  i = 0;
  while (arrayTwo.length !== 0) {
    mergeAnimations.push([[i + mergedArray.length], [arrayTwo[0]]]);
    mergedArray.push(arrayTwo[0]);
    arrayTwo.shift();
  }
  return mergedArray;
}
export function clearMergeAnimationsArray() {
  mergeAnimations.length = 0;
}
