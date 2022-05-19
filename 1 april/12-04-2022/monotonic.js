let arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

let monotonic = (arr) => {
    
    let increasingCount= 0;
    let decreasingCount = 0;

    arr.forEach((element,index)=>{
        if(arr[index]>=arr[index+1]){
            decreasingCount++
        }
        if(arr[index]<arr[index+1]){
            increasingCount++
        }
    });
    return increasingCount === arr.length-1 || decreasingCount === arr.length-1;
}

console.log(monotonic(arr));
// monotonic(arr);