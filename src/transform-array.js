module.exports = function transform(arr) {

    if(!Array.isArray(arr)) throw new Error();

    let res = [];
    let j = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '--double-next'){
            i < arr.length-1 ? res[j] = arr[i+1] : res[j] = undefined;
        } else if(arr[i] === '--double-prev'){
            i > 0 ? res[j] = arr[i-1] : res[j] = undefined;
        } else if(arr[i] === '--discard-prev'){
            i++;
            i > -1 ? res[j-1] = arr[i] : res[j] = undefined;
        } else if(arr[i] === '--discard-next'){
            i += 2;
            i < arr.length-1 ? res[j] = arr[i] : res[j] = undefined;
        } else res[j] = arr[i];
        j++;
    }
    return res.filter(e => e !== undefined);
};
