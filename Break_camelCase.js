/**
 * "camelCasing"  =>  "camel Casing"
 * "identifier"   =>  "identifier"
 * ""             =>  ""
 */

function solution(string) {
  function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
  }
  let newString = ``;
  const arr = string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (isUpper(arr[i])) {
      newString += ` ${arr[i]}`;
    } else {
      newString += arr[i];
    }
  }
  return newString;
}

const str1 = "camelCasing";
const str2 = "identifier";
const str3 = "";

console.log(solution(str1));
console.log(solution(str2));
console.log(solution(str3));
