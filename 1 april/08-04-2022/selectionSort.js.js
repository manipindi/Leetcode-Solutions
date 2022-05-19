let selectionSort = (arr,  n) => {
    let i, j, min_idx;
    let counter = 0;
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++){
            if (arr[j] < arr[min_idx]){
                min_idx = j;
                [arr[min_idx],arr[i]] = [arr[i],arr[min_idx]];
                counter++
            }   
        }
    }
    console.log(arr);
    console.log(counter);
}

let arr = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1]
// let arr = [0, 1, 0, 1, 0, 1]
selectionSort(arr,arr.length)

