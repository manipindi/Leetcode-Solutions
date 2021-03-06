let  matrix = [[1,2,3],[4,5,6],[7,8,9]];

let spiralOrd = (matrix) =>{
    let result = [];
    let left =0, top = 0, right = matrix[0].length-1, 
    bottom = matrix.length-1;
    let direction = 'right';

    while(left<=right && top<=bottom){
        if(direction==='right'){
            for(let i=left; i<=right; i++){
                result.push(matrix[top][i]);
            }
            top +=1;
            direction = 'down';
        }
        else if (direction === 'down'){
            for(let i=top; i<=bottom; i++){
                result.push(matrix[i][right]);
            }
            right -= 1;
            direction = 'left';
        }
        else if(direction==='left'){
            for(let i= right; i>=left; i--){
                result.push(matrix[bottom][i]);
            }
            bottom -=1;
            direction = 'up';
        }
        else if(direction==='up'){
            for(let i=bottom; i>=top; i--){
                result.push(matrix[i][left]);
            }
            left +=1;
            direction='right';
        }
    }
    return result;
};

console.log(spiralOrd(matrix));