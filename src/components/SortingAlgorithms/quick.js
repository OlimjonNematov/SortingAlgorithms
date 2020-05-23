export var quickAnimations = [];

export function quickSort(currentArray, left, right) {
  var currentIndex;
  if (currentArray.length > 1) {
    currentIndex = partition(currentArray, left, right);
    if (left < currentIndex - 1) {
      quickSort(currentArray, left, currentIndex - 1);
    }
    if (currentIndex < right) {
      quickSort(currentArray, currentIndex, right);
    }
  }
  return currentArray;
}

function partition(array, left, right) {
  var pivot = array[Math.floor((left + right) / 2)];
  var i = left;
  var j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      quickAnimations.push([i, array[j]]);
      quickAnimations.push([j, array[i]]);
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
function swap(array, leftIndex, rightIndex) {
  var temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}
export function clearQuickAnimationsArray() {
  quickAnimations.length = 0;
}
