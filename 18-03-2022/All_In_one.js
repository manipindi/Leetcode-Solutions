//1. find the first and last indeces of the target value
let arr = [5,7,7,8,8,10];
let target = 6;
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


//2. spiral order
let  matrix = [[1,2,3],[4,5,6],[7,8,9]];

let spiralOrd = (matrix) =>{
    let result = [];
    let left =0, top = 0, right = matrix[0].length-1, 
    bottom = matrix.length-1;
    let direction = 'right';

    while(left<=right && top<=bottom){
        if(direction==='right'){
            for(let i=left; i<=right; i++){
                result.push(matrix[top][i]);
            }
            top +=1;
            direction = 'down';
        }
        else if (direction === 'down'){
            for(let i=top; i<=bottom; i++){
                result.push(matrix[i][right]);
            }
            right -= 1;
            direction = 'left';
        }
        else if(direction==='left'){
            for(let i= right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom -=1;
            direction = 'up';
        }
        else if(direction==='up'){
            for(let i=bottom; i>=top; i--){
                result.push(matrix[i][left]);
            }
            left +=1;
            direction='right';
        }
    }
    return result;
};

console.log(spiralOrd(matrix));


//3. maximum jump to reach the last index
// let arr = [2,3,1,1,4];
let arr = [3,2,1,0,4];

let maxJump = (arr) =>{
    let lastBestIndex = arr.length-1;
    for(let i=arr.length-1; i>=0; i--){
        if(i+arr[i]>= lastBestIndex){
            lastBestIndex = i;   
        }
    }
    
    let result = lastBestIndex ==0? true : false;
    console.log(result);
    
    
}
maxJump(arr);


//4. Last word length
let word = 'Hello world';
// let word = ' fly me  to  the moon';
// let word = 'luffy is still joyboy';
let res = [];

let lastWordLen = (s) =>{
    let words = s.split(' ');
    for(let i=0; i<=words.length-1; i++){
        if(i===words.length-1){
            console.log(words[i].length);
        }
    }
}
lastWordLen(word)


//5. combinations sum equals the target
// let candidates = [2,3,6,7];
let candidates = [2,3,5];
target = 8;

var combinationSum = function(candidates, target) {
    const result = [];

 function permute(arr=[], sum=0, idx=0) {
     if(sum > target) return;
     if(sum === target) result.push(arr);

     for(let i = idx; i < candidates.length; i++) {
         permute([...arr, candidates[i]], sum+candidates[i], i);
     }
 }
 permute()
 return result; 
};

console.log(combinationSum(candidates,target));