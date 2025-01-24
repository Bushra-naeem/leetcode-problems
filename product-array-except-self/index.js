var productArr = function (arr) {
  let n = arr.length;
  let resultArr = Array(n).fill(1);

  left = 1;
  for (let i = 0; i < n; i++) {
    resultArr[i] *= left;
    left *= arr[i];
  }

  right = 1;
  for (let j = n - 1; j >= 0; j--) {
    resultArr[j] *= right;
    right *= arr[j];
  }

  return resultArr;
};
const arr = [1, 2, 3, 4];
console.log(productArr(arr));
