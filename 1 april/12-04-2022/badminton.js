const prompt = require("prompt-sync")({ sigint: true });

let inputCount = prompt("Enter input count: ");


for(let count = 0; count<inputCount; count++){
    let counter = 0;
    let input = prompt();
    while(input>=0){
        if(input%2==0){
            counter++;
        }
        input -= 1;
    }
    console.log(counter);
    
}

