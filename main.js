// Lightning Exercise 1: Use the reduce method on the following array
// to determine how much total rain fell last month.

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10];

const totalRainfall = monthlyRainfall.reduce(
  (currentTotal, nextValue) => (currentTotal += nextValue),
  0
);
console.log(totalRainfall);

const words = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumped",
  "over",
  "the",
  "lazy",
  "dog",
];

// let wordz = words.join(" ");

// console.log(wordz);

// const sentence = words.reduce(function (currentWord, nextWord) {
//   return currentWord + " " + nextWord;
// }, "");

const sentence = words.reduce(
  (currentWord, nextWord) => currentWord + " " + nextWord,
  ""
);

console.log(sentence);
