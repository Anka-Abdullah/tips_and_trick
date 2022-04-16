/**
 * ["a","b","c","d","f"] -> "e"
 * ["O","Q","R","S"] -> "P"
 */

function findMissingLetter(array) {
  function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split(`${array[0].toLowerCase()}`);
  alphabet = `${array[0].toLowerCase()}${alphabet[1]}`;
  alphabet = alphabet.split("");
  let miss;
  for (let i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() !== alphabet[i]) {
      miss = alphabet[i];
      break;
    }
  }
  if (isUpper(array[0])) {
    miss = miss.toUpperCase();
  }
  return miss;
}

const arrayA = ["a", "b", "c", "d", "f"];
const arrayB = ["O", "Q", "R", "S"];

console.log(findMissingLetter(arrayA));
console.log(findMissingLetter(arrayB));
