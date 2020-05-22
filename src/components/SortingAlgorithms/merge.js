export var mergeAnimations = [];
export function mergeSort(originalArray) {
  let length = originalArray.length;
  return beginMergeSort(originalArray, length, 0);
}
function beginMergeSort(originalArray, length, start) {
  let arrayOne = [];
  let arrayTwo = [];
  let arrayLength = originalArray.length;
  if (arrayLength <= 1) {
    return originalArray;
  } else {
    //adding to array one
    for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
      let tempVal = originalArray[i];
      arrayOne.push(tempVal);
    }
    //adding to array two
    for (let i = Math.floor(arrayLength / 2); i < arrayLength; i++) {
      let tempVal = originalArray[i];
      arrayTwo.push(tempVal);
    }
    console.log(start);

    //recurse
    arrayOne = beginMergeSort(arrayOne, length, start);
    arrayTwo = beginMergeSort(
      arrayTwo,
      length,
      Math.floor((start + originalArray.length - 1) / 2) + 1
    );
  }
  return merge(arrayOne, arrayTwo, 0);
}
//merge the two arrays
function merge(arrayOne, arrayTwo, start) {
  console.log(arrayOne);
  console.log(arrayTwo);
  let mergedArray = [];
  let i = 0;
  while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
    if (arrayOne[0] > arrayTwo[0]) {
      mergeAnimations.push([[i + mergedArray.length + start], [arrayTwo[0]]]);
      mergedArray.push(arrayTwo[0]);
      arrayTwo.shift();
    } else {
      mergeAnimations.push([[i + mergedArray.length + start], [arrayOne[0]]]);
      mergedArray.push(arrayOne[0]);
      arrayOne.shift();
    }
  }
  i = 0;
  while (arrayOne.length !== 0) {
    mergeAnimations.push([[i + mergedArray.length + start], [arrayOne[0]]]);
    mergedArray.push(arrayOne[0]);
    arrayOne.shift();
  }
  i = 0;
  while (arrayTwo.length !== 0) {
    mergeAnimations.push([[i + mergedArray.length + start], [arrayTwo[0]]]);
    mergedArray.push(arrayTwo[0]);
    arrayTwo.shift();
  }
  return mergedArray;
}
export function clearMergeAnimationsArray() {
  mergeAnimations.length = 0;
}
