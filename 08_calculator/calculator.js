const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrNumbers) {
  return arrNumbers.reduce((total, arrNumbers) => total + arrNumbers, 0);
};

const multiply = function (arrNum) {
  let multiplicacion = 1;
  for (let i = 0; i < arrNum.length; i++) {
    multiplicacion *= arrNum[i];
  }
  return multiplicacion;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
