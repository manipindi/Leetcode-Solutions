// Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.

// In other words, the value at output[i] is equal to the product of every number in the input array other than input[i].

// Note that you're expected to solve this problem without using division.

// array = [5, 1, 4, 2]
// output =[8, 40, 10, 20]


//solution

// let arr = [5,1,4,2];
let arr = [1, 8, 6, 2, 4];
// let arr = [-5, 2, -4, 14, -6];
// let arr = [9, 3, 2, 1, 9, 5, 3, 2];

let products = (arr) => {
    let i = 0;
    let outputArray = []
    while (i < arr.length) {
        let product = 1;
        for (j = 0; j < arr.length; j++) {
            product *= arr[j]
        }  
        outputArray.push(product/arr[i]);
        i++
    }
    return outputArray;
}

console.log(products(arr));


//Test cases
// [
//     {
//         "array": [5, 1, 4, 2],
//         "output": [8, 40, 10, 20]
//     },
//     {
//         "array": [1, 8, 6, 2, 4],
//         "output": [384, 48, 64, 192, 96]
//     },
//     {
//         "array": [-5, 2, -4, 14, -6],
//         "output": [672, -1680, 840, -240, 560]
//     },
//     {
//         "array": [9, 3, 2, 1, 9, 5, 3, 2],
//         "output": [1620, 4860, 7290, 14580, 1620, 2916, 4860, 7290]
//     },
//     {
//         "array": [4, 4],
//         "output": [4, 4]
//     },
//     {
//         "array": [0, 0, 0, 0],
//         "output": [0, 0, 0, 0]
//     },
//     {
//         "array": [1, 1, 1, 1],
//         "output": [1, 1, 1, 1]
//     },
//     {
//         "array": [-1, -1, -1],
//         "output": [1, 1, 1]
//     },
//     {
//         "array": [-1, -1, -1, -1],
//         "output": [-1, -1, -1, -1]
//     },
//     {
//         "array": [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         "output": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     },
//     {
//         "array": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
//         "output": [362880, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     }
// ]