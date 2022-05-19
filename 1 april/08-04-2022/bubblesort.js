

// let pushNum = (input) => {
//     let result = []
//     for(i=0; i<input.length; i++){
//         if(input[i] === '0'){
//             result.unshift(parseInt(input[i]));
//         }
//         if(input[i] === '1'){
//             result.push(parseInt(input[i]));
//         }
//     }
//     return result;
// }
// console.log(pushNum(input));


// console.log(input[0]===input[2]);

let input = '010101101001011';

let push = (input) => {
    let arr = [];

    for(let i=0; i<input.length; i++){
        arr.push(parseInt(input[i]))
    }
    console.log(arr);

    
    let swap = true;
        let count = 0
        let counter = 0;
        while (swap) {
            swap = false;
            for (i = 0; i < arr.length - count; i++) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    counter++
                    swap = true;
                }
            }
            count++
        }
        console.log(counter);
    
    return arr;
}

console.log(push(input));

