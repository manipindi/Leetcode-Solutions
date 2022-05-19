let n = 5;

let k = 3;
// let k= 2;

let matrix = [
    [1, 1, 34, 1, 1],
    [2, 5, 2, 4, 2],
    [9, 3, 45, 7, 3],
    [4, 4, 26, 4, 4],
    [5, 90, 5, 1, 5]
]

let subSquare = (matrix,n,k) => {
    let str = '';
    for(i=0; i<n-k+1; i++){
        for(let j=0; j<n-k+1; j++){
            let sum = 0;
            for(let l=i; l<k+i; l++){
                for(let m=j; m<k+j; m++){
                    sum = sum + matrix[l][m];
                }
            }
            str += sum + ' ';  
        }
        console.log(str);
        str = ''
    }
};

subSquare(matrix,n,k)