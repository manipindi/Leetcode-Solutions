let noofStudents = 10;

let studentsList = [];
for(i=noofStudents; i>=1; i--){
    studentsList.push(i)
}

// console.log(studentsList);

let rounds = 2;
// let firstMoves = [[2,7,5],[4,2,6],[3,4,8]];
let firstMoves = [[6,2,2],[5,3,6]];
// console.log(firstMoves[0][0]);

let shuffleCards = (studentsList, rounds, firstMoves) =>{
    let i=0
    while(i<rounds){

            //operations
            let jMove = firstMoves[i][0];
            let kMove = firstMoves[i][1];
            let lMove = firstMoves[i][2];

            //J pop
            let jPopped = [];
            for(j=0; j<jMove; j++){
                jPopped.push(studentsList.pop())
            }

            //add k popped items
            let kPopped = [];
            for(k=0; k<kMove; k++){
                kPopped.push(studentsList.pop())
            }
            
            //add j popped items
            for(ji=jPopped.length-1; ji>=0; ji--){
                studentsList.push(jPopped[ji])
            }
  
            //add l popped ietms
            let lPopped = [];
            for(l=0; l<lMove; l++){
                lPopped.push(studentsList.pop())
            }
            

            //k cards add from step 2
            for(ki=0; ki<kPopped.length; ki++){
                studentsList.push(kPopped[ki])
            }

            //l cards insert 
            for(li=lPopped.length-1; li>=0; li--){
                studentsList.push(lPopped[li])
            }
    
        i++
    }
    return studentsList

};

let res = shuffleCards(studentsList, rounds, firstMoves);
let result = []
for(i=res.length-1; i>=0; i--){
    result.push(res[i])
}
console.log(result);
