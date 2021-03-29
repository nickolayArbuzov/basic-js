module.exports = class DepthCalculator {
    calculateDepth(array) {
        let currDepth;
        let fixedDepth = 1;
        for (let i=0; i<array.length; i++) {
            if (Array.isArray(array[i])) {
                currDepth = 1;
                currDepth += this.calculateDepth(array[i]);
            if (currDepth > fixedDepth) fixedDepth = currDepth;
            }
        }
        return fixedDepth;
    }
};
