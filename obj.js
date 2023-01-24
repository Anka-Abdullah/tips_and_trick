const obj = {
  no_aju: '30000835363AB-020',
  no_ppbj: '02022032000010',
  termin_ke: 3,
  total_nilai_transaksi: 349282840,
  nilai_pembayaran_transaksi: 698565680,
  nilai_sisa_transaksi: 0,
  total_ppn: '3492828400',
  nilai_pembayaran_ppn: 69856566,
  sisa_ppn_sebelumnya: 3422971834,
  nilai_pembayaran_ppnbm: 23615808,
  sisa_ppnbm_sebelumnya: 1157174592,
  sisa_ppnbm: 1168982496,
  total_ppnbm: '1180790400',
  dpp_input: '349282840',
  sisa_ppn: 3457900117,
  ppn_input: '34928283',
  ppnbm_input: '11807904',
  total_pembayaran_sebelumnya: 698565680,
  total_pembayaran: 1047848520
}

const toNumber = (o) => {
  const variable = ["no_aju", "no_ppbj", "termin_ke"]
  Object.keys(o).forEach((k) => {
    if (!variable.includes(k)) {
       o[k] = parseInt(o[k])
    }
  });
  return o
};

console.log(toNumber(obj));