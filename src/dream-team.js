const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let str = members.map(function(el){
    if (typeof(el) === 'string') {
      return el.trim()[0].toUpperCase();
    }
    return '';
    
  }).sort().join('');

  return str;
};
