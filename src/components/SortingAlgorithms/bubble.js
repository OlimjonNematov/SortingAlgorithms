export function bubbleSort(array) {
  let anmationsArray = [];
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      anmationsArray.push([[j], [array[j]]]);
      anmationsArray.push([[j + 1], [array[j + 1]]]);
      if (array[j] > array[j + 1]) {
        anmationsArray.push([[j], [array[j + 1]]]);
        anmationsArray.push([[j + 1], [array[j]]]);
        //swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return anmationsArray;
}
