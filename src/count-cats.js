const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let line of matrix){
    for (let el of line){
      if (el == "^^"){
        count+=1;
      }
    }
  }
  return count;
};
