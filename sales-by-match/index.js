function salesByMatch(n, arr) {
  let pairs = [];
  let unpaired = [];

  for (let i = 0; i < n; i++) {
    const index = unpaired.indexOf(arr[i]);

    if (index !== -1) {
      pairs.push([unpaired[index], arr[i]]);
      unpaired.splice(index, 1);
    } else {
      unpaired.push(arr[i]);
    }
  }
  return pairs.length;
}

const n = 7;
const arr = [1, 2, 1, 2, 1, 3, 2];
const result = salesByMatch(n, arr);
console.log(result);
