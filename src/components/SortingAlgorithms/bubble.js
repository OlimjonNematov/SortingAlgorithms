export function bubbleSort(a) {
  let array = a.slice();
  let anmationsArray = [];
  //for every element in the array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      anmationsArray.push([j, j + 1]);
      anmationsArray.push([j, j + 1]);
      if (array[j] > array[j + 1]) {
        anmationsArray.push([j, array[j + 1]]);
        anmationsArray.push([j + 1, array[j]]);
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        anmationsArray.push([-1, -1]);
        anmationsArray.push([-1, -1]);
      }
    }
    if (array === a.slice().sort((a, b) => a - b)) {
      break;
    }
  }
  a = array;
  return [anmationsArray, a];
}
