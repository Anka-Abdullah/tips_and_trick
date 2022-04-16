/**
 * Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 */

 function findShort(s){
     let count = 0;
    let arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        lenCek = arr[i].split('').length;
        if (lenCek < count || count === 0) {
            count = lenCek;
        }
    }
    return count;
}

const str = "bitcoin take over the world maybe who knows perhaps"
console.log(findShort(str));