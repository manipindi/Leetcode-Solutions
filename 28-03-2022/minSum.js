let arr = [[2],[10,1],[1,2,12]];
let result = [[2],[10,1],[1,2,12]];

// let arr = [[2], [1,0], [3, 6, 5]];
// let result = [[2], [1,0], [3, 6, 5]];


let minSum = (arr)=>{
    // console.log(result);
    // let result = [...arr];
    let path = []
    let minimum;
    for (let i = result.length-2; i >= 0; i--){
        for (let j = 0; j < result[i].length; j++){

            let pathVar = Math.min(result[i+1][j], result[i+1][j+1]);

            result[i][j] += pathVar;
            
        }
        minimum = Math.min(...result[i]);

        for(let k=0; k<result[i].length; k++){
            if(result[i][k]===minimum){
                path.push(arr[i][k])
            }
        }
        
    }
    let sum = 0;
    for(s=0; s<path.length; s++){
        sum += path[s];
    }
    path.unshift(result[0][0]-sum);
    
    console.log(path);
    return result[0][0]
}

console.log(minSum(arr));
