let matrix = [[20, 30, 40,1,4], [10, 20, 60,4,5], [10, 20, 20,2,6],[10, 20, 20,5,1],[10, 20, 20,5,1]];
// let matrix = [[4, 5, 1, 6], [3, 5, 1, 8], [1, 2, 3, 10], [5, 4, 3, 12]]

let findDiagonal = (matrix) => {
    let left = 0, right = 0;
    for (let i = 0; i < matrix.length; i++) {
        left += matrix[i][i];
        right += matrix[i][matrix.length - 1 - i];
    }
    let result = left + right;
    console.log(left + ' ' + right);
    // console.log(result);
    return result
};

function diagonalSums(matrix) {
    let mid = Math.floor(matrix.length / 2)
    let position = matrix[mid][mid]

    let res ;

    if (matrix[0].length % 2 === 0) {
        res = findDiagonal(matrix)
    }

    if (matrix[0].length % 2 === 1) {
        res = findDiagonal(matrix) - position;
    }

    return res;
}

console.log(diagonalSums(matrix));