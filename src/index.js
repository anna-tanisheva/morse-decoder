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
    for (i = 0; i < expr.length; i += subExpr) {
        arrayOfLetters.push(expr.slice(i, i + subExpr));
    }
    iterateArray: for (let item in arrayOfLetters) {
        for (char in arrayOfLetters[item]) {
            if (arrayOfLetters[item][char] === '1') {
                arrayOfLetters[item] = arrayOfLetters[item].slice(char);
                continue iterateArray;
            }
        }
    }
    let arrayOfMorse = []
    arrayOfLetters.forEach((item) => {
        let itemDecode = ''
        for (let i = 0; i < item.length; i += 2) {
            if (item[i + 1] === '0') {
                itemDecode += '.';
            } else if (item[i + 1] === '1') {
                itemDecode += '-';
            }
        }
        arrayOfMorse.push(itemDecode);
    })
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