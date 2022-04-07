// let matrix = [[ 4,5,1],[3,5,1],[1,2,3]];
let matrix = [[ 4,5,1,6],[3,5,1,8],[1,2,3,10],[5,4,3,12]];

let transpose = (matrix) => {

  let result = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let column = []
    for (let j = 0; j < matrix.length; j++) {
      column.push(matrix[j][i]);
    }
    result.push(column)
  }

  for(let i=0; i<result.length;i++){
      console.log(result[i]);
  }
};
transpose(matrix);

