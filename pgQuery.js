/**
 * result
 * "INSERT INTO student(firstname, lastname, age, address, email)
 * VALUES('Mary Ann', 'Wilters', 20, '74 S Westgate St', 'mroyster@royster.com')"
 */

const data = {
  firstname: "Mary Ann",
  // lastname: "Wilters",
  // age: 20,
  // address: "74 S Westgate St",
  // email: "mroyster@royster.com",
};
const search = {
  firstname: "Mary Ann",
  lastname: ["AND", "Wilters"],
  // email: ["OR", "oyster.com"],
  age: ["OR", 20],
  // date: "createdAt between '2020-01-01 12:00:00' and '2020-01-01 23:30:00'",
};

const objLoop = (obj) => {
  let str = "";
  const operator = ["AND", "OR"];
  Object.keys(obj).map((key) => {
    const x = obj[key],
      strQ = ` ${x[0]} ${table}.${key} = ${x[1]}`,
      strIlike = `ILIKE '%${x[1]}%'`;

    if (key === "default") str += "AND " + x;

    if (operator.includes(x[0])) {
      typeof x[1] === "number"
        ? (str += strQ)
        : (str += strQ.split("=")[0] + strIlike);
    } else {
      str += ` ${table}.${key} ` + strIlike;
    }
  });
  return str;
};

const sqlInsertHelper = (table, d) => {
  let column = "",
    value = [];
  Object.keys(d).map((key) => {
    column += `${key}, `;
    value.push(d[key]);
  });
  return `INSERT INTO ${table}(${column}) VALUES(${value
    .map((v) => `'${v}'`)
    .join(", ")})`;
};

const sqlGetDataHelper = (table, search, limit, offset, orderBy) => {
  const order = orderBy ? ` ORDER BY ${orderBy}` : "",
    page = limit ? ` LIMIT ${limit} OFFSET ${offset || 0}` : "",
    searchBy = objLoop(search);

  return `SELECT * FROM ${table} WHERE ${searchBy + order + page}`;
};

const update = (table, where, data) => {
  let searchBy = objLoop(where),
    arrUpdate = [];

  Object.keys(data).map((key) => {
    const payload =
      typeof data[key] === "number" ? data[key] : `'${data[key]}'`;
    arrUpdate.push(`${key} = ${payload}, `);
  });

  // execute query
  return `UPDATE ${table} SET ${arrUpdate
    .join("")
    .slice(0, -2)} WHERE ${searchBy}`;
};

const getData = sqlGetDataHelper(
  (table = "school.td_student"),
  search,
  (limit = 6),
  (offset = 1)
  // (orderBy = "userId")
);

const updateData = update((table = "school.td_student"), search, data);

console.log(updateData, "\n");
console.log(getData);
// console.log(sqlInsertHelper('student',data));

const filter = {
  tot: "46"
}

filter?.tut = parseInt(filter.tut)  

console.log(filter.tut);
