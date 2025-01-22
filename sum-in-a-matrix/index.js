function sumInAMatrix(matrix) {
  let score = 0;

  while (matrix.some((row) => row.length > 0)) {
    let maximumNumbers = [];

    for (let row of matrix) {
      if (row.length > 0) {
        const max = Math.max(...row);
        maximumNumbers.push(max);
        row.splice(row.indexOf(max), 1);
      }
    }
    const rowMax = Math.max(...maximumNumbers);
    score += rowMax;
  }
  return score;
}

console.log(
  sumInAMatrix([
    [7, 2, 1],
    [6, 4, 2],
    [6, 5, 3],
    [3, 2, 1],
  ])
);
