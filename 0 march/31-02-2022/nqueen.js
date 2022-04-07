//prints all the possible result cases

let addQueens = (board) => {
    let res = [];

    for(let col=0; col<board.length; col++){
        let addRow = new Array(board.length).fill('0');
        addRow[board[col]] = 'X';
        res.push(addRow);
    }
    return res;
}

let nqueen = (n) => {
    let result = [] ;

    let searchPositon = (i, n, slate) => {
        let lastQueen = i - 1;
        
        for(let prevQueen= 0; prevQueen<lastQueen; prevQueen++){
            //rwo conflict
            if(slate[prevQueen] === slate[lastQueen]){
                return;
            }
            
            let rowDif = Math.abs(prevQueen-lastQueen);
            let colDif = Math.abs(slate[prevQueen]-slate[lastQueen]);

            //diagonal conflict checking
            if(rowDif === colDif){
                return;
            }
        }

            if(i===n){
                result.push(slate.slice());
                return;
            }
            //recursive call
            for(let col=0; col<n; col++){
                slate.push(col); 
                searchPositon(i+1, n, slate);
                slate.pop();
            }
        
    }
    searchPositon(0, n , [])
    return result.map(board => addQueens(board));
}

console.log(nqueen(4));