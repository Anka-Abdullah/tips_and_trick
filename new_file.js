const number = 20

// cetak lah angka genap 0 sampai angka yang di tentukan di variabel number



// jawaban
let newNumber = ''

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
     newNumber += `${i} ,`
    }
}
console.log(newNumber);