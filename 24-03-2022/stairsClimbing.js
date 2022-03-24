// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?



// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step



//solution

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
