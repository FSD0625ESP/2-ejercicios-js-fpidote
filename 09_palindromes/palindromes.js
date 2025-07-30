const palindromes = function (str) {
  const cleanedString = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  const strToarray = cleanedString
    .split("")
    .reverse()
    .join("")
    .replace(/\s/g, "");

  if (cleanedString == strToarray) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
