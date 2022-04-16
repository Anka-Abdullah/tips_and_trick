// function solution(str){
//    let arr= str.split('');
//    let newArr = [];

//    for (let i = 0; i < arr.length; i++) {
//        let newStr
//        if (i >0  && i % 2 === 1) {
//            continue
//        }
//        newStr = arr[i] + (arr[i + 1] || '_');
//          newArr.push(newStr);
//    }
//     return newArr
// }

// const string = 'abce'
// console.log(solution(string));

// let kd_daerah = "";
// // let aju
// let aju = "q";
// let kd = "q";
// const a = aju && kd ? true : false;
// const b = (aju || kd) !== "undefined" && (aju || kd) !== "null" ? true : false;
// // console.log(a && b ? true : false)
// // aju && kd && (aju || kd) !== "undefined" && (aju || kd) !== "null" ? console.log(true) : console.log(false);
// let gh
// console.log(gh ? 'g' : '');
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  } 

  const roman = 29
    console.log(romanize(roman));