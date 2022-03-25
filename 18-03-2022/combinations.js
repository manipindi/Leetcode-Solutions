// let candidates = [2,3,6,7];
let candidates = [2,3,5];
let target = 7;

let combinationSum = function(candidates, target) {
    const result = [];

 function permute(arr=[], sum=0, idx=0) {
     if(sum > target){
        return;
     } 
     if(sum === target){  
        result.push(arr);
     }

     for(let i = idx; i <= candidates.length-1; i++) {
         permute([...arr, candidates[i]], sum+candidates[i], i);
     }
 }
 permute()
 return result; 
};

console.log(combinationSum(candidates,target));
