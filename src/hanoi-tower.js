const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  let transfers = 2 ** disksNumber - 1;
  let time = Math.floor(transfers / (turnsSpeed / 3600));

  return {turns: transfers, seconds: time };

  
};
