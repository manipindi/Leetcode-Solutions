let input = [[1],[2,3],[4,5,6]];
let combinations = [];

let combinate = (combinationInput, combinations) => {
    let possibleCombinations = [];
    if(combinationInput.length===1){
        possibleCombinations = [[combinationInput,0]]
    }
    else{
        for(let i=0; i<combinations.length; i++){
            let combinationArray = combinations[i][0];
            let combinationPrevIndex = combinations[i][1];
            for(let j=0; j<combinationInput.length; j++){
                if(combinationPrevIndex == j || combinationPrevIndex == j-1){
                    let requiredArray = [combinationArray + [combinationInput[j]],j];
                    possibleCombinations.push(requiredArray);
                }
            }
        }
    }
    return possibleCombinations;
};

for(i=0; i<input.length; i++){
    combinations = combinate(input[i], combinations)
    // console.log(combinations);
}
let possibleCombinations = [];
for(i=0; i<combinations.length; i++){
    possibleCombinations.push(combinations[i][0]);
}

console.log(possibleCombinations);