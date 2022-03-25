// let arr = [5,7,7,8,8,10];
// // let arr = [5,7,7,8,8,10];
// // let arr = [5,7,7,8,8,10];

// let findIndeces = (arr,target) =>{
//     let left = 0;
//     let right = arr.length-1;

//     while(left<right){
//         let mid = Math.floor((left+right)/2);
//         if(target === arr[mid]){
//             return mid;
//         }
//         else if(target < mid){
//             right = mid-1;
//         }
//         else{
//             left = mid +1;
//         }
//     }
//     return false
// }

// console.log(findIndeces(arr,5));


let arr = [5,7,7,8,8,10];
let target = 8;
let notFound = [-1,-1];
let res = []

let findIndeces = (arr, target) =>{
    let left = 0;
    let right = arr.length-1;

    let low = -1;
    let up = -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(target<=arr[mid]){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    low = left; 
    // console.log(low);

    left=0;
    right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(target<arr[mid]){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    up = right;
    return low<=up? [low,up]: notFound
}

console.log(findIndeces(arr,target));