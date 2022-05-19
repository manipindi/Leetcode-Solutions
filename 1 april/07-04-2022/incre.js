const prompt = require("prompt-sync")({ sigint: true });

let change = (i,n) => {
    console.log(i);
    if(i<n){
        change(i+1,n)   
    }
    else{
        return 
    }
}

const n = parseInt(prompt("Enter number: "));

// console.log(change(1,n));
change(1,n)