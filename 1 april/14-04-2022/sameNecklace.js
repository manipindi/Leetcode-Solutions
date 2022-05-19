const prompt = require("prompt-sync")({ sigint: true });

let necklaceChecker = (string1, string2) => {
    //if the length of string 1 and string 2 is 0 then returns true
    if (string1.length === 0 && string2.length === 0) {
        return true;
    }

    //if the length of string1 is not equal to string 2 return false
    if (string1.length != string2.length) {
        return false;
    }

    let index = 0
    while (index < string1.length) {
        //if the 1st string is equals to the second string then returns true
        if (string1 === string2) {
            return true;
        }

        //stores the first character in the string
        let firstElement = string1.charAt(0);

        //substr(1) returns the string from the 1st character to the last
        //and concat() adds the first element in the last to the substring
        //string1 value mutated
        string1 = string1.substr(1).concat(firstElement);
        index++;

    }
    return false
}

//function calls
console.log(necklaceChecker("nicole", "icolen"))
console.log(necklaceChecker("nicole", "lenico"))
console.log(necklaceChecker("nicole", "coneli"))
console.log(necklaceChecker("aabaaaaabaab", "aabaabaabaaa"))
console.log(necklaceChecker("abc", "cba"))
console.log(necklaceChecker("xxyyy", "xxxyy"))
console.log(necklaceChecker("xyxxz", "xxyxz"))
console.log(necklaceChecker("x", "x"))
console.log(necklaceChecker("x", "xx"))
console.log(necklaceChecker("x", ""))
console.log(necklaceChecker("", ""))
