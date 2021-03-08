const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Error');
  }
  let transformed = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
      console.log(i);
    }
    else if (arr[i] === '--discard-prev') {
        transformed.pop();
    }
    else if (arr[i] === '--double-next') {
      if (i != arr.length - 1) {
        transformed.push(arr[i + 1]);
      } 
    }
    else if (arr[i] === '--double-prev') {
        transformed.push(transformed[transformed.length - 1]);
    } else {
      transformed.push(arr[i]);
    }
  }
  
  return transformed;
};
