const prompt = require("prompt-sync")({ sigint: true });

let caesar = (str, shifts) => {

    let result = '';
    for (let character = 0; character < str.length; character++) {
        //str.charCodeAt(character) returns the utf character code of each character
        //the small letters from a-z  char codes are present in between 97-122
        //the below formula returns the ciphered word for the character based on the number of shifts
        //String.fromCharCode() gives the character value based on the character code For Ex: if the value if 97 it gives a

        if (str.charCodeAt(character) > 96 && str.charCodeAt(character) < 123) {
            //the resulted character adds to the result string
            result += String.fromCharCode(((str.charCodeAt(character) - 97 + shifts) % 26) + 97)
        }
    }
    return result;
}

// below can be useful for dynamic input

// const str = prompt('Enter string: ');
// const shifts = parseInt(prompt('Enter number of shifts: '));
// console.log(caesar(str,shifts));

//function calls
console.log(caesar('a', 0));
console.log(caesar('a', 1));
console.log(caesar('a', 5));
console.log(caesar('a', 26));
console.log(caesar('d', 15));
console.log(caesar('z', 1));
console.log(caesar('q', 22));
console.log(caesar("abcz", 1));
console.log(caesar("irk", 13));
console.log(caesar("fusion", 6));
console.log(caesar("dailyprogrammer", 6));
console.log(caesar("jgorevxumxgsskx", 20));
