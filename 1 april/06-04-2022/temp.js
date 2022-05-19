let noOfStudents = 2;
let studentNames = ['mani','jeevan'];
let noOfSubjects = 3;
let subjectDetails = [['telugu',100],['hindi',100],['english',100],['maths',100]];

let marks = {
    'mani' : [['telugu',80],['hindi',50],['english',100],['maths',75]],
    'jeevan' : [['telugu',50],['hindi',60],['english',40],['maths',90]]
}

let findMarks = (studentNames) => {
    for(let i=0; i<studentNames.length; i++){
let name = studentNames[i];
// console.log(name);

let marksArray = marks[name];
// console.log(marksArray);
let sum = 0;
for(let j=0; j<marksArray.length; j++){
    // console.log(marksArray[j][1]);
    sum += marksArray[j][1];
}
console.log(`Name : ${name} \nTotal Marks = ${sum} `);
    }
}
findMarks(studentNames)