var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;

  const rotatedArr = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    rotatedArr[(i + k) % n] = nums[i];
  }
  return rotatedArr;
};
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
console.log(rotate(nums, k));
