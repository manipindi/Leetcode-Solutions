// Run-Length Encoding
// Write a function that takes in a non-empty string and returns its run-length encoding.

// From Wikipedia, "run-length encoding is a form of lossless data compression in which runs of data are stored as a single data value and count, rather than as the original run." For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".

// To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 As), can't naively be encoded as "12A", since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) should be encoded in a split fashion; the aforementioned run should be encoded as "9A3A".


//solution

// let string = "AAAAAAAAAAAAABBCCCCDD";
// let string = 'aA';
// let string = '122333';
// let string = '************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA'; 
// let string = 'AAAAAAAAAAAAABBCCCCDD';

let string = '        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


let stringArray = string.split('');

let runEncode = (stringArray) =>{
    let i=0
    let outPutstring = '';
    while(i<stringArray.length){
        let count = 1;
        while(i<stringArray.length && stringArray[i]===stringArray[i+1]){
            count++;
            if(count===9){
                outPutstring += `${count}${stringArray[i]}`;
                count=1;
            }
            i++
        }
        outPutstring += `${count}${stringArray[i]}`;
        i++
    }
    return outPutstring
}

console.log(runEncode(stringArray));


// Test Cases:
// [
//     {
//         "string": "AAAAAAAAAAAAABBCCCCDD",
//         "output": "9A4A2B4C2D"
//     },
//     {
//         "string": "aA",
//         "output": "1a1A"
//     },
//     {
//         "string": "122333",
//         "output": "112233"
//     },
//     {
//         "string": "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA",
//         "output": "9*3*7^6$7%6!9A9A2A"
//     },
//     {
//         "string": "aAaAaaaaaAaaaAAAABbbbBBBB",
//         "output": "1a1A1a1A5a1A3a4A1B3b4B"
//     },
//     {
//         "string": "                          ",
//         "output": "9 9 8"
//     },
//     {
//         "string": "1  222 333    444  555",
//         "output": "112 321 334 342 35"
//     },
//     {
//         "string": "1A2BB3CCC4DDDD",
//         "output": "111A122B133C144D"
//     },
//     {
//         "string": "........______=========AAAA   AAABBBB   BBB",
//         "output": "8.6_9=4A3 3A4B3 3B"
//     },
//     {
//         "string": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//         "output": "9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a9a1a"
//     },
//     {
//         "string": "        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
//         "output": "8 9a9a9a9a9a4a"
//     },
//     {
//         "string": " ",
//         "output": "1 "
//     },
//     {
//         "string": "[(aaaaaaa,bbbbbbb,ccccc,dddddd)]",
//         "output": "1[1(7a1,7b1,5c1,6d1)1]"
//     },
//     {
//         "string": ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s",
//         "output": "9;3;9'9'2'111273524142311s"
//     },
//     {
//         "string": "AAAAAAAAAAAAABBCCCCDDDDDDDDDDD",
//         "output": "9A4A2B4C9D2D"
//     }
// ]
