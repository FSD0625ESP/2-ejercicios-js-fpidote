const caesar = function (str, shift) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  shift = shift % 26;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (/[a-zA-Z]/.test(char)) {
      const isUpper = char === char.toUpperCase();
      const lowerChar = char.toLowerCase();
      const index = alphabet.indexOf(lowerChar);

      let shiftedIndex = (index + shift + 26) % 26;
      let shiftedChar = alphabet[shiftedIndex];

      result += isUpper ? shiftedChar.toUpperCase() : shiftedChar;
    } else {
      result += char;
    }
  }

  return result;
};

// Do not edit below this line
module.exports = caesar;
