let flip = (arr, i) => {
    let temp, start = 0;

    while (start < i) {
        temp = arr[start];
        arr[start] = arr[i];
        arr[i] = temp;
        start++;
        i--;
    }
    console.log(arr);
}

let findMax = (arr, n) => {
    let mi = 0;
    for (let i = 0; i < n; i++)
        if (arr[i] > arr[mi]){
            mi = i;
        }
    // console.log(arr);
    return mi;
}

let pancakeOrder = (arr, n) => {

    for (let curr_size = n; curr_size > 1; curr_size--) {

        let mi = findMax(arr, curr_size);

        if (mi != curr_size - 1) {
            flip(arr, mi);
            flip(arr, curr_size - 1);
        }
    }

    return arr;
}

let arr = [10,2,9,5,1,6];
console.log(pancakeOrder(arr,arr.length));


