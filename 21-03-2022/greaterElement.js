// let arr = [2, 5, -3, -4, 6, 7, 2];

let input_array = [0, 1, 2, 3, 4];

let len = input_array.length

let greaterElement = (input_array,len) =>{
    let stack = [];
    let greaterItems = new Array(len);
    // console.log(n);
    let i = 0;
    let outputArray = [];

    for(i=0; i<len; i++){
        greaterItems[i] = -1
    }
    // console.log(greaterItems);
    i=0
    while(i<len*2){
        while(stack.length!=0 && input_array[i % len] > input_array[stack[stack.length - 1]]){
            greaterItems[stack[stack.length - 1]] = input_array[i % len];
            // console.log(greaterItems);
            stack.pop();
            
        }
        stack.push(i % len);
            i++;
        // console.log(stack);
    }
    
    for(i = 0; i < len; i++)
    {
        outputArray.push(greaterItems[i]);
    }
    console.log(outputArray);
};

greaterElement(input_array,len);


// console.log(0>undefined);

// let ar = [0];
// console.log(ar.length-1);