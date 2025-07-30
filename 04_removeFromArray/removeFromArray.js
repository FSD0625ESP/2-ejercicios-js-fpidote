const removeFromArray = function(inputArray, ...args) {
    return inputArray.filter(valores=> !args.includes(valores));
};

// Do not edit below this line
module.exports = removeFromArray;
