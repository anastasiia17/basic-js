const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let tmpCounter = 1;
    for(let el of arr){
      if (Array.isArray(el)){
        tmpCounter = this.calculateDepth(el) + 1;
      }
      if (tmpCounter >= depth){
        depth = tmpCounter;
      }
    }
    return depth;
  }
};