export var selectionAnimations = [];
export function selectionSort(originalArray) {
  console.log(originalArray);
  let size = originalArray.length;
  //   let sortedArray = [];
  for (let i = 0; i < size; i++) {
    let newLowestIndex = i;

    //check through each one of the elements after i
    for (let j = i; j < size; j++) {
      let tempVal = originalArray[j];
      selectionAnimations.push([[i], [originalArray[i]]]);
      selectionAnimations.push([[j], [originalArray[j]]]);
      //check if the current elemtn is less than last smallest value
      if (tempVal < originalArray[newLowestIndex]) {
        newLowestIndex = j;
      }
    }

    let tempVal = originalArray[i];
    selectionAnimations.push([[i], [originalArray[newLowestIndex]]]);
    selectionAnimations.push([[newLowestIndex], [tempVal]]);
    swap(originalArray, i, newLowestIndex);
  }
  return originalArray;
}

function swap(arr, index1, index2) {
  let tempVal = arr[index2];
  arr[index2] = arr[index1];
  index1 = tempVal;
}

export function clearSelectionAnimationsArray() {
  selectionAnimations.length = 0;
}
