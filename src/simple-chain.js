const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [], 
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value))
    return this;
    
  },
  removeLink(position) {
    if(position > 0){
      this.chain.splice(position-1, 1);
      return this;
    }else{
      this.chain =[];
      throw new Error('Error');
    }
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.map(function(el){
      return `( ${el} )`;
    })
    this.chain = [];
    return finish.join('~~');
  }
};

module.exports = chainMaker;
