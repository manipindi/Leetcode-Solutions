let n = 3

//sum of angles has to be 15
let sumofAngles = (n) => {
    let sum = (n * (Math.pow(n, 2) + 1) / 2);
    return sum;
}

//function to calculate diagonals sum
let diagonalSum = (matrix) => {
    let diagonalSumsArray = []
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
        rightDiagonalSum += matrix[i][matrix.length - 1];
    }
    diagonalSumsArray.push(leftDiagonalSum, rightDiagonalSum)
    return diagonalSumsArray
}



//function to calculate rowsum
let rowSum = (matrix) => {
    let rowSumArray = [];
    let rowSums = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            rowSums += matrix[i][j];
        }
        rowSumArray.push(rowSums);
        rowSums = 0;
    }
    return rowSumArray;
}



//function to calculate column sum
let colSum = (matrix) => {
    let colSumArray = [];
    let colSums = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            colSums += matrix[j][i];
        }
        colSumArray.push(colSums);
        colSums = 0;
    }
    return colSumArray;
}


//function 
let matrixSum = (n) => {
    let result = [];
    let rows = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let rowMatrix = (((n + 1) / 2 + i + j) % n);
            let colMatrix = (((n + 1) / 2 + i + n - j - 1) % n) + 1;
            rows.push(((rowMatrix * n) + colMatrix))
        }
        result.push(rows)
        rows = [];
    }
    return result
}

let matrix = matrixSum(n);
console.log(matrix);

// console.log(diagonalSum(matrix));
// console.log(colSum(matrix));
// console.log(rowSum(matrix));


let checkMatrix = (matrix,rows,columns,diagonals) => {
    //rowCheck
    let status = true;
    for(let i = 0; i<rows.length; i++){
        if(rows[i] === sumofAngles(n) && columns[i] === sumofAngles(n) ){
            status = true;
            continue;
        }   
        console.log(false);
    }
    console.log(`Rows and Columns equal to 15 : ${status}`);
    

    for(let angleSums = 0; angleSums<diagonals.length; angleSums++){
        if(diagonals[angleSums] === sumofAngles(n) ){
            status = true;
            continue;
        }   
        console.log(false);
    }
    console.log(`Diagonals equal to 15 : ${status}`);
}

checkMatrix(matrix,rowSum(matrix),colSum(matrix),diagonalSum(matrix))
// console.log(checkMatrix(matrix,rowSum(matrix),colSum(matrix),diagonalSum(matrix)));