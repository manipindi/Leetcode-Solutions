let pair = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
}

let caesar = (pair, str, rounds) => {
    let keys = Object.keys(pair);
    console.log(keys);

    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < keys.length; j++) {
            if (str[i] === keys[j]) {
                let value = pair[str[i]];
                let cipheredValue = value + rounds;
                if (cipheredValue > 26) {
                    cipheredValue = cipheredValue % 26;
                    let keys = Object.keys(pair).filter(k => pair[k] === cipheredValue);
                    result += keys;
                }
                else{
                    let keys = Object.keys(pair).filter(k => pair[k] === cipheredValue);
                    result += keys;
                }
            }
        }
    }
    console.log(result);
}

caesar(pair, 'ab', 2);