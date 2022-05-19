const prompt = require("prompt-sync")({ sigint: true });

let result = [];
let change = (n) => {
    if(n<=0){
        result.push(n);
        return;
    }
    else{
        result.push(n)
        change(n-5);
        result.push(n)
    }
    return result;
}

const n = parseInt(prompt('enter number: '));

console.log(change(n));
