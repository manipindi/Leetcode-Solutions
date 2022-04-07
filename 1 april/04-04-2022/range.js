let arr = [345, 604, 321, 433, 704, 470, 808, 718, 517, 811];
// let arr = [921, 107, 270, 631, 926, 543, 589, 520, 595, 93, 873, 424, 759, 537, 458, 614, 725, 842, 575, 195];

let ranges = [[300,350],[400,700]];
// let ranges = [[1,100],[50,600],[1,1000]]

let range = (arr) => {
    let result  = []
    let min;
    let max;
    let count = 0;
    for(let i=0; i<ranges.length; i++){
        min = ranges[i][0];
        max = ranges[i][1];
        for(let j=0; j<arr.length; j++){
            if(arr[j]>=min && arr[j]<=max){
                count++
            }
        }
        // console.log(count);
        result.push(count);
        count = 0;
    }
    return result;
};
console.log(range(arr));
// range(arr)