module.exports = function repeater(str, options) {
    let string = '';
    
    for (let i=0; i<options.repeatTimes; i++){
        string += str;
        for (let j=0; j<options.additionRepeatTimes; j++){
            'addition' in options && (string += options.addition);
            'additionSeparator' in options && (string += options.addition);
        }
        if(i < options.repeatTimes-1) 'separator' in options ? string += options.separator : string += '+';
    }
    return string;
};
