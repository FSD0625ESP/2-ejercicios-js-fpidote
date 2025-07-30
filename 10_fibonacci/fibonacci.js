const fibonacci = function (num) {
  if (num < 1) return "OOPS";

  let a = 1;
  let b = 0;
  let c = 0;
  let arrFib = [];

  for (let i = 0; i <= num; i++) {
    arrFib[i] = a;
    c = a;
    a = a + b;
    b = c;
  }

  return arrFib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
