//object or hashmap for the digits and it's respective letters
let letterMap = {
    0 : ['0'],
    1 : ['1'],
    2 : ['a','b','c'],
    3 : ['d','e','f'],
    4 : ['g','h','i'],
    5 : ['j','k','l'],
    6 : ['m','n','o'],
    7 : ['p','q','r','s'],
    8 : ['t','u','v'],
    9 : ['w','x','y','z']
};


//recursive function to generate combinations
let neumonicFinder = (index, number, phoneArray, possibleNeumonics) => {

    //base case to exit the condition and print the combination
    if(index === number.length){
        // console.log(phoneArray);
        let neumonic = phoneArray.join('');
        possibleNeumonics.push(neumonic);
    }
    else{
        let digit = number[index]; 
        let digitArray = letterMap[digit];
        // console.log(digitArray);
        for(let i = 0; i<digitArray.length; i++){
            let letter = digitArray[i];
            phoneArray[index] = letter;
            // console.log(phoneArray);
            neumonicFinder(index+1, number, phoneArray, possibleNeumonics);
        }
    }
};


//base function
let neumonics = (number) => {
    let phoneArray = new Array(number.length).fill('0');
    // console.log(phoneArray);
    let possibleNeumonics = [];
    neumonicFinder(0,number,phoneArray,possibleNeumonics);
    return possibleNeumonics;
}


console.log(neumonics('1905'));
// console.log(neumonics('1111'));
// console.log(neumonics('002'));
// console.log(neumonics('444'));
// console.log(neumonics('9056661234'));
// console.log(neumonics('4163420000'));
// console.log(neumonics('1'));
// console.log(neumonics('1212'));
// console.log(neumonics('0'));
// console.log(neumonics('23'));
// console.log(neumonics('97'));
// console.log(neumonics('980016'));