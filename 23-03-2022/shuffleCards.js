// There are Y number of students appeared to take an exam, the exam hall contains Y seats labling from number 1 to number Y and I have their respective labling cards(1 to Y), inorder to jumble the students I need to suffle these cards Z times before they are distributing to students, and the suffling should be done by following manner:

// step 1 : take J cards from the set

// step 2 : take another K cards from the set

// step 3 : put the J cards, which you taken in the step 1, back on top of the remaining set

// step 4 : take L cards from the set

// step 5 : put the K cards, which you taken in the step 2, card by card on top of the set

// step 6 :  place the block of L cards on top

// Note: taking a block of cards from the top of the set does not change their order. The entire block is removed in a single move and not card by card. The only exception is step 5, where you return cards one by one from the top.

// Input
// Y - how many no of students

// Z - how many no of times the cards should shuffle

// Ji, Ki, Li shufling moves in Z times



// Example
// Input:
// 10 2
// 6 2 2
// 5 3 6

// Output:
// 1 2 8 7 3 9 6 5 4 10


//solution

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


// Test Cases :
// Input:
// 10 2
// 6 2 2
// 5 3 6

// Output:
// 1 2 8 7 3 9 6 5 4 10


// Input:
// 12 3
// 2 7 5
// 4 2 6
// 3 4 8

// Output:
// 1 2 10 12 6 5 4 3 9 7 8 11