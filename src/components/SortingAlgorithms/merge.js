export var mergeAnimations = [];
export function mergeSort(originalArray) {
  //   console.log(originalArray);
  let arrayLength = originalArray.length;
  if (arrayLength <= 1) {
    return originalArray;
  } else {
    let arrayOne = [];
    let arrayTwo = [];

    //adding to array one
    for (let i = 0; i < arrayLength / 2; i++) {
      let tempVal = originalArray[i];
      arrayOne.push(tempVal);
    }
    //adding to array two
    for (let i = arrayLength / 2; i < arrayLength; i++) {
      let tempVal = originalArray[i];
      arrayTwo.push(tempVal);
    }
    console.log(arrayOne);
    console.log(arrayTwo);
    //recurse
    arrayOne = mergeSort(arrayOne);
    arrayTwo = mergeSort(arrayTwo);

    // console.log("now merging");
    return merge(arrayOne, arrayTwo);
  }
}

function merge(arrayOne, arrayTwo) {
  let mergedArray = [];
  while (arrayOne.length !== 0 && arrayTwo.length !== 0) {
    if (arrayOne[0] > arrayTwo[0]) {
      mergedArray.push(arrayTwo[0]);
      arrayTwo.shift();
    } else {
      mergedArray.push(arrayOne[0]);
      arrayOne.shift();
    }
  }
  while (arrayOne.length !== 0) {
    mergedArray.push(arrayOne[0]);
    arrayOne.shift();
  }

  while (arrayTwo.length !== 0) {
    mergedArray.push(arrayTwo[0]);
    arrayTwo.shift();
  }
  //   console.log("merged array: " + mergedArray);
  return mergedArray;
}
export function clearMergeAnimationsArray() {
  mergeAnimations.length = 0;
}
