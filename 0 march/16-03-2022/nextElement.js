// Series: 1, 4, 10, 22, 46 ....
// Write a program to print the given position element?
// Eg: input = 6
// 	output = 94



//solution

let a1 = 1;
let next =0;
let arr = [];

arr.push(a1);

for(let index=0; index<5; index++){
    next = (a1*2)+2;
    a1 = next;
    arr.push(a1)
}
console.log(arr[5]);

