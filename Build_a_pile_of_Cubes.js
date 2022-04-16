/**
 * findNb(1071225) --> 45
 * findNb(91716553919377) --> -1
 */

/**
 * n^3 + n-1^3 + n-2^3 + ... + 1^3 = m
 */

function findNb(m) {
  let n = Math.pow(m, 1 / 2);
  if (n.toString().includes(".")) {
    return -1;
  }
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n == 0) {
      break;
    }
    n -= i;
    count += 1;
  }
  let w = 1;
  for (let i = count + 1; i >= 0; i--) {
    w += (i - 1) ** 3;
  }
  if (w !== m) {
    return -1;
  }
  return count;
} 

const numb = 1719743732100;
const numb2 = 91716553919377;
const numb3 = 4183059834009;

console.log(findNb(400));
console.log(findNb(numb2));

const num = 45;
let total = 1;
for (let i = num + 1; i >= 0; i--) {
  total += (i - 1) ** 3;
}
console.log(total);
// console.log(count);
//2045253
console.log(Math.pow(400, 1 / 2));
