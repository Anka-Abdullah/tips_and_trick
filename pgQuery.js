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

const sqlInsertHelper = (table, d) => {
  let column = "",
    value = [];
  Object.keys(d).map((key) => {
    column += `${key}, `;
    value.push(d[key]);
  });
  let sql = `INSERT INTO ${table}(${column}) VALUES(${value
    .map((v) => `'${v}'`)
    .join(", ")})`;
  return sql;
};

const sqlGetDataHelper = (table, search, limit, offset, orderBy) => {
  let searchBy = "",
    order = orderBy ? ` ORDER BY ${orderBy}` : "";
  page = limit ? ` LIMIT ${limit} OFFSET ${offset || 0}` : "";
  Object.keys(search).map((key) => {
    const x = search[key];
    switch (true) {
      case key === "date":
        searchBy += "AND " + x;
        break;
      case x[0] === "AND":
        searchBy += `AND ${table}.${key} ILIKE '%${x[1]}%' `;
        break;
      case x[0] === "OR":
        searchBy += `OR ${table}.${key} ILIKE '%${x[1]}%' `;
        break;
      default:
        searchBy += `${table}.${key} ILIKE '%${x}%' `;
    }
  });
  return `SELECT * FROM ${table} WHERE ${searchBy.slice(0, -4) + order + page}`;
};

const sqlCountHelper = (table, search) => {
  let searchBy = "";
  Object.keys(search).map((key) => {
    key !== "date"
      ? (searchBy += ` ${table}.${key} ILIKE '%${search[key]}%' AND`)
      : (searchBy += search[key]);
  });
  return `SELECT count(*) FROM ${table} WHERE${searchBy.slice(0, -3)}`;
};

const update = (table, where, data) => {
  let searchBy = "",
    arrUpdate = [];
  // create 'where' sql query
  Object.keys(where).map((key) => {
    const x = where[key];

    if (key === "date") {
      searchBy += "AND " + x;
    } else if (x[0] === "AND" || x[0] === "OR") {
    /** create (AND, OR) operator query */
      typeof x[1] === "number"
        ? (searchBy += ` ${x[0]} ${table}.${key} = ${x[1]}`)
        : (searchBy += ` ${x[0]} ${table}.${key} ILIKE '%${x[1]}%'`);
    } else if (x[0] === "NOT") {
        /** create (NOT) operator query */
      searchBy += ` ${x[1]} ${table}.${key} = ${x[2]}`;
    } else {
    /** DEFAULT */
      searchBy += ` ${table}.${key} ILIKE '%${x}%'`;
    }
  });

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
  (offset = 1),
  // (orderBy = "userId")
);

const updateData = update((table = "school.td_student"), search, data);

// console.log(updateData);
console.log(getData);
// console.log(sqlInsertHelper('student',data));
