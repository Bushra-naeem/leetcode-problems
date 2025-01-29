var sortVowels = function (str) {
  const vowels = "AEIOUaeiou";
  const count = new Array(vowels.length).fill(0);
  for (let char of str) {
    const index = vowels.indexOf(char);
    if (index !== -1) {
      count[index]++;
    }
  }
  let string = "";
  let current = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      while (count[current] === 0) {
        current++;
      }

      string += vowels[current];
      count[current]--;
    } else {
      string += char;
    }
  }
  return string;
};

const result = sortVowels("BuShrA");
console.log(result);
