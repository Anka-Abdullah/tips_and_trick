// let str = ''
// let newArr = arr.split(',').map(item => str += ` '${item}',`)
// console.log(str.slice(1, -1));



function checkDuplicate() {
  let arr = [] // di isi dengan no ppbj
  // empty object
  let map = {};
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    // check if object contains entry with this element as key
    if (map[arr[i]]) {
      console.log(arr[i]);
      result = true;
      // terminate the loop
      break;
    }
    // add entry in object with the element as key
    map[arr[i]] = true;
  }
  if (result) {
    console.log("Array contains duplicate elements");
  } else {
    console.log("Array does not contain duplicate elements");
  }
}
checkDuplicate();

