const user = {
  userName: "anka23",
  age: 29,
  email: "dono234@gmail.com",
  address: "jakarta",
  password: "    klj9ujihj",
  // noRek: "99999",
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
    regex: /(){8,16}$/,
    notNull: false,
  },
  noRek: {
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
  let newData = {};

  Object.keys(validation).map((key) => {
    // start looping
    if (data[key]) {
      newData[key] =
        typeof data[key] === "string" ? data[key].trim() : data[key];
    }
    // if the data cannot be empty || notNull === true
    if (!validation[key].notNull) {
      if (!newData[key]) {
        console.log(`${key} is not valid`);
        return;
      }
      if (!validation[key].regex.test(newData[key])) {
        console.log(`${key} is not valid`);
        return;
      }
    }
    // If the data can be empty
    if (validation[key].notNull && newData[key]) {
      if (!validation[key].regex.test(newData[key])) {
        console.log(`${key} is not valid`);
        return;
      }
    }
  }); // end of map
  return addDate(newData);
};

validate(user, userValidation);
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
