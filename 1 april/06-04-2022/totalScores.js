const prompt = require("prompt-sync")({ sigint: true });



let findMarks = () => {
    let result = [];

    let studentNames = []
    let subjectNames = []

    const noOfStudents = prompt("Enter number of students: ");
    for (let i = 0; i < noOfStudents; i++) {
        const student = prompt("Enter student name: ");
        studentNames.push(student);
    }
    // console.log(studentNames);


    const noOfSubjects = prompt("Enter number of subjects: ");
    let subnames = []
    for (let i = 0; i < noOfSubjects; i++) {
        const subject = prompt("Enter subject name: ");
        const maxMarks = prompt('Enter max marks: ');
        subjectNames.push([subject, maxMarks]);
        subnames.push(subject)
    }
    console.log(subjectNames);

    let marks = {}
    let mar = []

    let res = [];
    let res1 = [];

    let out = '';
    for (let i = 0; i < noOfStudents; i++) {

        console.log(`Enter student ${studentNames[i]} marks: `);

        for (let j = 0; j < noOfSubjects; j++) {
            const studentMarks = prompt(`Enter ${studentNames[i]} ${subnames[j]} marks: `);
            mar.push([subjectNames[j][0], studentMarks]);
            // console.log(mar);
            marks[studentNames[i]] = mar;
        }

        mar = []

        let name = studentNames[i];

        let marksArray = marks[name];


        let sum = 0;
        for (let k = 0; k < marksArray.length; k++) {
            // console.log(marksArray[j][1]);
            sum += parseInt(marksArray[k][1]);
            res.push(marksArray[k][1]);
        }
        // console.log(res);
        res1.push(res);
        res = [];
        console.log(`Name : ${name} \nTotal Marks = ${sum} `);


    }
    for (let i = 0; i < subnames.length; i++) {
        out +=  ' '+subnames[i];
    }

    let total = 0;
    let output = ''
    console.log('    ',out,' total');
    for(let i=0; i<res1.length; i++){
       for(let j=0; j<res1[i].length; j++){
            output +='    ' + res1[i][j];
            total += parseInt(res1[i][j])
       }
       console.log(studentNames[i], output,' ',total);
       output = ''
       total = 0 
    
    }

}


findMarks()


