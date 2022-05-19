
// let caesar = (str, shifts) => {
//     //splits the each character in the string and returns an array of each character
//     str=str.split("");
    
//     let result = ''
//     str.forEach(character => {
//         //character.charCodeAt(character) returns the utf character code of each character
//         //the small letters char codes a-z are present in between 97-122
//         // the below formula gives the output of the character 
//         //the formula below is the typical caesar cipher formula

//         if(character.charCodeAt(character)>96 && character.charCodeAt(character)<123){
//             //the resultted character adds to the result string
//             result += String.fromCharCode(((character.charCodeAt(character) - 97 + shifts) % 26) + 97)
//         }
//     });
//     return result;
// }

// let str='irk'

// console.log(caesar(str,13));

console.log(('S')-65);