// let arr = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60];
let arr = [1,2,4,7,10,11,7,12,6,7,16,18,19];
// let arr = [1,2,4,7,10,11,13];
// let arr = [1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55];
let sortedAr  = [-1,-1]
let unsortedPos = [];
let n = arr.length;

let start , end = n - 1, i, max, min;
function unsortedSub(arr, n) {
    for (start = 0; start < n - 1; start++) {
        if (arr[start] > arr[start + 1])
            break;
    }
    if (start == n - 1) {
        console.log(sortedAr);
        return;
    }

    for (end = n - 1; end > 0; end--) {
        if (arr[end] < arr[end - 1])
            break;
    }

    max = arr[start]; 
    min = arr[start];

    for (i = start + 1; i <= end; i++) {
        if (arr[i] > max)
            max = arr[i];
        if (arr[i] < min)
            min = arr[i];
    }
    // console.log(max);
    // console.log(min);

    for (i = 0; i < start; i++) {
        if (arr[i] > min) {
            start = i;
            break;
        }
    }
    for (i = n - 1; i >= end + 1; i--) {
        if (arr[i] < max) {
            end = i;
            break;
        }
    }

    unsortedPos.push(start,end)
    console.log(unsortedPos);
    return;
}

unsortedSub(arr, n);


// Test cases 
// [
//     {
//         "array": [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]  ,
//         "output": [3, 9]
//     },
//     {
//         "array": [1, 2],
//         "output": [-1, -1]
//     },
//     {
//         "array": [2, 1],
//         "output": [0, 1]
//     },
//     {
//         "array": [1, 2, 4, 7, 10, 11, 7, 12, 7, 7, 16, 18, 19],
//         "output": [4, 9]
//     },
//     {
//         "array": [1, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 18, 19],
//         "output": [4, 6]
//     },
//     {
//         "array": [1, 2, 8, 4, 5],
//         "output": [2, 4]
//     },
//     {
//         "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
//         "output": [0, 12]
//     },
//     {
//         "array": [4, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
//         "output": [0, 11]
//     },
//     {
//         "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 11, 57],
//         "output": [1, 11]
//     },
//     {
//         "array": [-41, 8, 7, 12, 11, 9, -1, 3, 9, 16, -15, 51, 7],
//         "output": [1, 12]
//     },
//     {
//         "array": [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11],
//         "output": [6, 7]
//     },
//     {
//         "array": [1, 2, 3, 4, 5, 6, 18, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19],
//         "output": [6, 16]
//     },
//     {
//         "array": [1, 2, 3, 4, 5, 6, 18, 21, 22, 7, 14, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 4, 14, 11, 6, 33, 35, 41, 55],
//         "output": [4, 24]
//     },
//     {
//         "array": [1, 2, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
//         "output": [2, 19]
//     },
//     {
//         "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2],
//         "output": [2, 19]
//     },
//     {
//         "array": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
//         "output": [-1, -1]
//     },
//     {
//         "array": [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
//         "output": [-1, -1]
//     }
// ]