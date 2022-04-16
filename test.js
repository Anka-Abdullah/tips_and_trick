const data = [
  {
    userName: "dono",
    age: "24",
  },
  {
    userName: "dani",
    age: "21",
  },
  {
    userName: "dini",
    age: "22",
  },
];

let userName = ''

data.map((x) => {
    x.age === '20' ? userName = x.userName : ''
}) 

console.log(userName);