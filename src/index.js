const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arrayOfLetters = [];
    let i;
    let subExpr = 10;
    //split input string into array of letters (by ten)
    for (i = 0; i < expr.length; i += subExpr) {
        arrayOfLetters.push(expr.slice(i, i + subExpr));
    }
    //remove (extra 0s from the beginning of the letter) - search for first 1 and remove previous 0s
    iterateArray: for (let item in arrayOfLetters) {
        for (char in arrayOfLetters[item]) {
            if (arrayOfLetters[item][char] === '1') {
                arrayOfLetters[item] = arrayOfLetters[item].slice(char);
                continue iterateArray;
            }
        }
    }
    // decode "letters" to . and - through checking each second symbol. If 1 - then "-" otherwise "0".
    // space '**********' become empty string and is pushed to the array as well.
    let arrayOfMorse = [];
    arrayOfLetters.forEach((item) => {
        let itemDecode = '';
        for (let i = 0; i < item.length; i += 2) {
            if (item[i + 1] === '0') {
                itemDecode += '.';
            } else if (item[i + 1] === '1') {
                itemDecode += '-';
            }
        }
        arrayOfMorse.push(itemDecode);
    })
    //decode to letters
    output = ''
    arrayOfMorse.map(function (elem) {
        if (!elem) {
            output += ' ';
        } else {
            output += MORSE_TABLE[elem];
        }
    });
    return output
}

module.exports = {
    decode
}