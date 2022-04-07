let string = 'AcC';
let arr = [];
for(let i=0; i<string.length; i++){
    arr.push(string[i])
}
// console.log(arr);

let permute = (arr) => {
    let result = [];

    //recursive approach
    let search = (i, arr) => {
        if(i === arr.length){
            return result.push(arr.slice());
            // return;
        }

        for(let j=i; j<arr.length; j++){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            search(i+1, arr);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    search(0, arr);
    return result;
};

// console.log(permute(arr));
let resString = '';
let res = permute(arr);
for(i=0; i<res.length; i++){
    console.log(res[i].join(','));
}
console.log(resString);