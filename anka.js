// const isPrimeNumber = (value) => {
//   let pembagi = 0
//   for(let i=1; i<=value; i++) {
//       value%i == 0 && pembagi++;
//   }
//   return pembagi == 2

// }

// console.log(isPrimeNumber(7));

const arr = [
  {
    id_larangan: '70548a0b-09ac-d7bb-cd74-4ce6cebe227a',
    id_komoditi: '082848c0-909a-8a54-bdda-e452ddeb20ae',
    flag_param: '1',
    id_header: 'b6086fcf-b246-d322-6a75-0b78b1b5c301',
    flag_ie: 'I',
    list_data: {
      kd_izin: [
        {
          label: '28872-PI Elektronik (API-U)',
          value: '28872',
        },
        {
          label:
            '13650-Perjanjian Kerjasama (PKS) Rumah Potong Hewan Unggas (RPHU) dan PKS Cold Storage (jika status kepemilikan sewa/kerjasama)',
          value: '13650',
        },
      ],
      kode_hs: [
        {
          label: '71129100-28872-test',
          value: '082848c0-909a-8a54-bdda-e452ddeb20ae',
        },
        {
          label: '71123000-13650-test 2',
          value: 'b0f6d923-2246-ff03-ee91-30b455f31897',
        },
      ],
      pel_muat: {
        data: [
          {
            label: 'ATANS - ANSFELDEN',
            value: 'ATANS',
          },
        ],
        status: {
          label: 'Positif',
          value: '1',
        },
      },
      berat_min: {
        data: '999',
        status: {
          label: 'actual ton',
          value: '26',
        },
      },
      berat_maks: {
        data: '1000',
        status: {
          label: 'actual ton',
          value: '26',
        },
      },
      pel_tujuan: {
        data: [
          {
            label: 'IDTPE - TANJUNG PERAK',
            value: 'IDTPE',
          },
        ],
        status: {
          label: 'Positif',
          value: '1',
        },
      },
      negara_asal: {
        data: [
          {
            label: 'AF | AFGHANISTAN',
            value: 'AF',
          },
        ],
        status: {
          label: 'Positif',
          value: '1',
        },
      },
      negara_tujuan: {
        data: [
          {
            label: 'ID | INDONESIA',
            value: 'ID',
          },
        ],
        status: {
          label: 'Positif',
          value: '1',
        },
      },
      status_barang: {
        label: 'Baru',
        value: '1',
      },
    },
  },
];

const { list_data: data } = arr[0];

let newData = [];
const { kd_izin, kode_hs } = data;
kd_izin.forEach((y, i) => {
  newData.push({ ...data, kd_izin: y, kode_hs: kode_hs[i] });
});

let arr2 = [];

newData.forEach((x) => {
  arr2.push({ ...arr[0], list_data: x });
});

arr2.forEach((x) => {
  console.log(x.list_data);
});
