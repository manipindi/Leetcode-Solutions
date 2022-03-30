let arr = [[2],[3,4],[6,5,7],[4,1,8,3]];

var minimumTotal = function(triangle) {
    // Start from the 2nd to the bottom of the triangle
    let path = []
    for (let i = triangle.length-2; i >= 0; i--){
        // Add previous row cells to current cells and set the sum that is the smallest
        for (let j = 0; j < triangle[i].length; j++){
            let one = triangle[i+1][j];
            let two = triangle[i+1][j+1]
            let first = triangle[i][j]+one;
            let second = triangle[i][j] + two;

            triangle[i][j] = Math.min(first, second)
            console.log(triangle[i]);
            
        }
    }
    // console.log(path);
    
   return triangle[0][0]
}

console.log(minimumTotal(arr));

