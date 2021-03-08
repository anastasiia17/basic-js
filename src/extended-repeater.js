const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes,
  separator = options.separator,
  addition = options.addition,
  additionRepeatTimes = options.additionRepeatTimes,
  additionSeparator = options.additionSeparator;

  if (repeatTimes === undefined){
    repeatTimes = 1;
  }
  
  if (separator === undefined){
    separator = "+";
  }
  
  if (addition === undefined){
    addition = "";
  }
  
  if (additionRepeatTimes === undefined){
    additionRepeatTimes = 1;
  }
  
  if (additionSeparator === undefined){
    additionSeparator = "|";
  }

  let additionStr = (addition + additionSeparator).repeat(additionRepeatTimes);
  let subStr = additionStr.substring(0, String(additionStr).length - String(additionSeparator).length)
  let Str = str + subStr; 
  let resultString = (Str + separator).repeat(repeatTimes);
  return resultString.substring(0, String(resultString).length - String(separator).length);

};
  