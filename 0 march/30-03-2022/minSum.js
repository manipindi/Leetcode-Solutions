// let arr = [5, 7, 1, 1, 2, 3,22];
let arr = [1, 1, 1];

let sortArray = (arr) => {
    let swap = true;
        let count = 0
        while (swap) {
            swap = false;
            for (i = 0; i < arr.length - count; i++) {
                if (arr[i] > arr[i + 1]) {
                    //if even[i] > even[i+1] the i'th is greater than next element(i+1) the elemets will be swapped 
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swap = true;
                }
            }
            count++
        }
    return arr;
}

let minSum = (arr) => {
    let sorted = sortArray(arr);
    // console.log(sorted);
    let change = 0;

    for(let i=0; i<sorted.length; i++){
        if(sorted[i]>change+1){
            return change+1;
        }
        change = change+sorted[i];
    }
    return change + 1;
};

console.log(minSum(arr));
