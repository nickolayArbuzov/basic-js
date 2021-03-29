const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === "number" && position > 0 && position < this.chain.length) {
      this.chain.splice(position-1, 1);
      return this;
    } 
    this.chain = [];
    throw new Error("Error");
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    res = "";
    for (let i=0; i<this.chain.length; i++) {
      res += `( ${this.chain[i]} )`;
      if (i < this.chain.length-1) {
        res += "~~";
      }
    }
    this.chain = [];
    return res;
  },
};

module.exports = chainMaker;
