let month = "IDSS,ABC"; //( '12', '1', '2', '3', '4', '5' )

function queryShort(s) {
  let newStr = "";
  s.split(",").map(function (x) {
    newStr += ` '${x}',`;
  });
  return `(${(newStr = newStr.substring(1, newStr.length - 1))})`;
}

// console.log(queryShort(month));

let money =
  "02717465.280019559.8000727416.2600123357.87001135725.760034485.600024427.30001602861.95009468452.550065436.430011381325.6800814722.300029782626.3000383652.30001697338.130026812.5500633313.6800589919.30001508745393135.84007043683.8000227964.19002804756.9600341263.75001332006.3000839508.8300";

// function ceilBilangan(n) {
//   let x = parseInt(n).toString();
//   x = parseInt(x.slice(0, x.length - 3));
//   return Math.ceil(x / 10) * 10000;
// }

function ceilBilangan(n) {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  let x = parseInt(n).toString();
  x = parseInt(x.slice(0, x.length - 3));
  return formatter.format(Math.ceil(x / 10) * 10000)
}


console.log(ceilBilangan(money));
