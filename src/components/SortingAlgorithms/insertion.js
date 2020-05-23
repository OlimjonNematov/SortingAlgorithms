export var insertionAnimations = [];
export function insertionSort(a) {
  let originalArray = a.slice();
  let size = originalArray.length;
  //iterate through each element in the array
  for (let i = 0; i < size; i++) {
    let currentElement = originalArray[i];
    //for each element, check previous elements in the array
    for (let j = 0; j < i; j++) {
      //swap the element when the elemen is greater than element at j but less than j+1
      if (
        currentElement <= originalArray[j] &&
        currentElement <= originalArray[j + 1]
      ) {
        swap(originalArray, i, j);
      }
    }
  }
  console.log(originalArray);
  return originalArray;
}
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
export function clearInsertionAnimations() {
  insertionAnimations.length = 0;
}
