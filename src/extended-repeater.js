module.exports = function repeater(str, options) {
    /*
    'repeatTimes' in options 
    'separator' in options
    'addition' in options 
    'additionRepeatTimes' in options
    'additionSeparator' in options
    */
    for (let i=0; i<options.repeatTimes; i++){
        for (let j=0; j<options.additionRepeatTimes; j++){
            'addition' in options && (str += options.addition);
            'additionSeparator' in options && (str += options.addition);
        }
        'separator' in options ? str += options.separator : str += '+';
    }
    return str;
};
