// let arr = [2,3,1,1,4];
// let arr = [3,2,1,0,4];
let arr = [1,2,1];

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