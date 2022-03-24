// let arr = [5,1,4,2];
let arr = [1, 8, 6, 2, 4];
// let arr = [-5, 2, -4, 14, -6];
// let arr = [9, 3, 2, 1, 9, 5, 3, 2];

let products = (arr) => {
    let i = 0;
    let outputArray = []
    while (i < arr.length) {
        let product = 1;
        for (j = 0; j < arr.length; j++) {
            product *= arr[j]
        }  
        outputArray.push(product/arr[i]);
        i++
    }
    return outputArray;
}

console.log(products(arr));