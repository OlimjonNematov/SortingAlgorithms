export var selectionAnimations = [];
export function selectionSort(a) {
  let originalArray = a.slice();
  let size = originalArray.length;
  //   let sortedArray = [];
  for (let i = 0; i < size; i++) {
    let min = i;
    //check through each one of the elements after i
    for (let j = i + 1; j < size; j++) {
      let tempVal = originalArray[j];
      selectionAnimations.push([[i], [originalArray[i]]]);
      selectionAnimations.push([[j], [originalArray[j]]]);
      //check if the current element is less than last smallest value
      if (tempVal < originalArray[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let tempVal = originalArray[i];
      selectionAnimations.push([[i], [originalArray[min]]]);
      selectionAnimations.push([[min], [tempVal]]);
      swap(originalArray, i, min);
    }
  }
  return originalArray;
}

function swap(arr, index1, index2) {
  let tempVal = arr[index2];
  arr[index2] = arr[index1];
  arr[index1] = tempVal;
}

export function clearSelectionAnimationsArray() {
  selectionAnimations.length = 0;
}
