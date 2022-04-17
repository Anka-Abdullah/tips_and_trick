const user = {
  userName: "a",
  age: 29,
  email: "dono234@gmail.com",
  address: "jakarta",
  // password: "    kj",
  phone: "099999",
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
    regex: /^(.){0,16}$/,
    notNull: false,
  },
  phone: {
    regex: /^[1-9]{1}[0-9]{0,12}$/,
    notNull: true,
  },
};

const addDate = (data) => {
  let rs;
  const date = {
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  };
  if (data.createdAt) {
    data.updatedAt = date.updatedAt;
    rs = data;
  } else {
    rs = {
      ...data,
      ...date,
    };
  }
  console.log(rs);
  return rs;
};

const validate = (data, validation) => {
  let newData = {},
    message = {},
    error = false;

  Object.keys(validation).map((key) => {
    let v = validation[key],
      w = data[key],
      x = newData[key];

    if (data[key]) {
      x = typeof w === "string" ? w.trim() : w;
    }
    if (!v.notNull) {
      if (x === "" || x === null || x === undefined) {
        error = true;
        message[key] = `required`;
      }
      if (!v.regex.test(x)) {
        error = true;
        message[key] = `invalid`;
      }
    } else if (!v.regex.test(x)) {
      error = true;
      message[key] = `invalid`;
    }
  });

  return error ? message : addDate(newData);
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
