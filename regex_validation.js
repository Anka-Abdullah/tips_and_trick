const user = {
  userName: "anka",
  age: 29,
  email: "dono234@gmail.com",
  address: "jakarta",
  password: "    kj123456",
  phone: "99999",
  date: "22 feb",
  createdAt: "Sat Apr 16 2022 17:46:20 GMT+0700 (Western Indonesia Time)",
  updatedAt: "Sat Apr 16 2022 17:46:20 GMT+0700 (Western Indonesia Time)",
};

const userValidation = {
  userName: {
    regex: /[a-zA-Z0-9]{3,}$/,
    notNull: false,
  },
  age: {
    regex: /([0-9]{1,})/,
    notNull: false,
  },
  email: {
    regex: /[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}\.com$/,
    notNull: false,
  },
  address: {
    regex: /(){5}\w+/,
    notNull: false,
  },
  password: {
    regex: /^(.){8,16}$/,
    notNull: false,
  },
  phone: {
    regex: /^[1-9]{1}[0-9]{0,12}$/,
    notNull: true,
  },
};

const addDate = (data) => {
  const date = {
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };
  data.createdAt ? (data.updatedAt = date.updatedAt) : "";
  return data.createdAt ? data : { ...data, ...date };
};
const validate = (data, validation) => {
  let newData = {}

  Object.keys(validation).map((key) => {
    let v = validation[key],
      w = data[key]

    if (data[key]) {
      newData[key] = typeof w === "string" ? w.trim() : w;
    }
    if (!v.notNull) {
      if (!newData[key]) {
        throw new Error(`ERROR : ${key} is null`);
      }
      if (!v.regex.test(newData[key])) {
        throw new Error(`ERROR : ${key} is not valid`);
      }
    } else if (!v.regex.test(newData[key])) {
      throw new Error(`ERROR : ${key} is not valid`);
    }
  });
  return addDate(newData);
};

const OSM = validate(user, userValidation);
console.log(OSM);
// console.log(userValidation['userName'][0]);

// const str = {
//   a: "./03/03",
//   b: "./03/02",
//   c: "./03/01",
//   d: "./03/wkwk",
// }; // output './03/wkwk'

// const regex = /.{5}[a-z]/g;

// Object.keys(str).map((key) => {
//   if (regex.test(str[key])) {
//     console.log(str[key]);
//   }
// })
