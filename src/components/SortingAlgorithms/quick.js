export var animations = [];

export function quickSort(arr) {
  let a = arr.slice();
  if (a.length <= 1) {
    // animations.push(a);
    return a;
  } else {
    let leftArray = [];
    let rightArray = [];
    let newArray = [];
    let pivot = a.pop();
    let arrayLength = a.length;
    //issue: i and j reset everytime the recursion is executed
    let i = 0;
    let j = 0;
    for (let k = 0; k < arrayLength; k++) {
      if (a[k] <= pivot) {
        animations.push([i, a[k]]);
        leftArray.push(a[k]);
        i++;
      } else {
        animations.push([a.length - j, a[k]]);
        rightArray.push(a[k]);
        j++;
      }
    }
    /*
    console.log(
      "left: " +
        leftArray +
        "\n" +
        "pivot: " +
        pivot +
        "\n" +
        "right:" +
        rightArray
    );
    //*/
    return newArray.concat(quickSort(leftArray), pivot, quickSort(rightArray));
  }
}
