// mengubah Date.now() ke dalam format tanggal.
// biasanya digunakan untuk penyimpanan waktu pada mongoDB, agar filter berdasarkan tanggal bisa di lakukan.
const start = Date.now();

console.log(start);

console.log(new Date(start).toLocaleDateString());

// mengubah format tanggal yang dihasilkan new Date() ke dalam format milisecond sejak 1 Januari 1970, 00:00:00
let time = new Date()
console.log(Date.parse(new Date()));