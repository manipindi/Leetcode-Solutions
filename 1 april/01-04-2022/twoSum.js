let arr = [1, 2, 6, 5, 8];
let target = 9;


//O(N^2)
// let twoSum = (arr, target)  => {
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]+arr[i+1]===target){
//             console.log(arr[i],arr[i+1]);
//         }
//     }
// };
// // console.log(twoSum(arr,target));
// twoSum(arr, target);

//O(N)
let twoSum = function (arr, target) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (target - arr[i] in obj) {
            return [arr[obj[target - arr[i]]], arr[i]]
        } 
        else {
            obj[arr[i]] = i;
            console.log(obj[arr[i]]);
        }
        console.log(obj);
    }
};
console.log(twoSum(arr, target));