let matrix = [[ 4,5,1],[3,5,1],[ 1,2,3 ],[ 1,2,3 ]];

let transpose = (matrix) =>{
    // console.log('input: ');
    // for(let i=0; i<matrix.length; i++){
    //     console.log(matrix[i]);
    // }

    let result= Array(matrix.length).fill(0);

    
    console.log(result);

    for(let i=0; i<matrix.length; i++){
        result[i] = new Array(matrix.length)
    }
    // console.log(result);
    

    for(let i=0; i<matrix[0].length; i++){
        for(j=0; j<matrix.length; j++){
            result[i][j] = matrix[j][i]
        }
    }

    console.log('\ntranspose matrix: ');
    for(let i=0; i<result.length; i++){
        console.log(result[i]);
    }
    // return result;
};
// console.log(transpose(matrix));
transpose(matrix)
