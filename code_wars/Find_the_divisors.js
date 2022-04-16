/**
 * divisors(12); // should return [2,3,4,6]
 * divisors(25); // should return [5]
 * divisors(13); // should return "13 is prime"
 */

 function divisors(numb) {
    let arr =[];
    for (let i = 0; i < numb; i++) {
        const min = numb -i
        if (numb % min === 0 && min !== numb && min !== 1) {
            arr.push(min);
        }
        
    }
    if (arr.length === 0) {
        return `${numb} is prime`
    }else{
        return arr.sort((a,b) => a - b);
    }
    
};

const input = 48
console.log(divisors(input));