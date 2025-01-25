var sortArray = function (arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...sortArray(leftArr), pivot, ...sortArray(rightArr)];
};
const arr = [5, 3, 1, 2];
console.log(sortArray(arr));
