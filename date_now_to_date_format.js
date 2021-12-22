// mengubah Date.now() ke dalam format tanggal.
// biasanya digunakan untuk penyimpanan waktu pada mongoDB, agar filter berdasarkan tanggal bisa di lakukan.
const start = Date.now();

console.log(start);

console.log(new Date(start));

console.log(new Date(start).toLocaleDateString());