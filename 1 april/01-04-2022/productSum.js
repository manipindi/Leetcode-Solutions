// let arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
let arr = [1, 2, [3], 4, 5];
// let arr = [[1, 2],3,[4, 5]];
// let arr =  [[[[[5]]]]];

let productSum = (arr, depth) => {
    let sum=0;      
    for(let i=0; i<arr.length; i++){
        if(arr[i] instanceof Array){                                            
            sum+= productSum(arr[i],depth+1)
        }
        else{
            sum+= arr[i];
        }
    }       
    
    return (depth)*sum;
}

console.log("input: ", arr , " \noutput:", productSum(arr,1));
