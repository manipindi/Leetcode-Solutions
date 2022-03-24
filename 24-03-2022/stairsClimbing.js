let input = 5
let i = 0
let stepsCombinations = (i, input) => {

    //returns 0 if the i >= input after the recursion calls
    if (i > input){
        return 0;
    } 
    
    //returns  if the i is equal to input after the recursion calls
    if(i===input){
        return 1;
    }

    // recursive call for the function and it creates two copies of recursive calls first
    //those two recursive calls create another two and goes on until the value of i becomes greater than or equal to input value
    return stepsCombinations(i + 1, input) + stepsCombinations(i + 2, input);
    

};
console.log(stepsCombinations(i, input));
