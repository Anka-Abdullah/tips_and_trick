//  function iterator( rangeStart, rangeEnd ) {
//     if (rangeStart == 0 && rangeEnd == 0) {
//         return null;
//     }
    
    
//     var tmp = [];
  
//     for (let index = rangeStart; index <= rangeEnd; index++) {
//         tmp.push(index)
        
//     }
//     return tmp.join(",");
//   }

//   console.log(iterator(0, 5));

const arr1 = [0, 11, 22, 33, 44]
  
function divisible_by_11(arg) {

    let count = 0;

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] < 111) {
            if (arg[i] === 0) {
                console.log('0');
                count +=1
            }
            if (arg[i] !== 0 && arg[i]%11 === 0) {
                console.log('11');
                count +=1
            }
        }
        
    }
    
    return count
}

console.log(divisible_by_11(arr1));