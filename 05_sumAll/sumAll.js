const sumAll = function (a, b) {
  if (typeof a === "number" && a > 0 && typeof b === "number" && b > 0) {
    const mayor = Math.max(a, b);
    const menor = Math.min(a, b);

    let sum = mayor;
    for (let index = mayor; index >= menor; index--) {
      let c = index - 1;
      sum += c;
    }

    return sum;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
