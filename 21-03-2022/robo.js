//inputs
const inputs = [
    {
        "input_1": "E 21 21",
        "input_2": [
            "2F 3B",
            "4B 6F",
            "2F 9B",
            "4F 6B",
            "2F 6B",
            "4B 9B"
        ],
        "output": "Y W"
    },
    {
        "input_1": "W 11 11",
        "input_2": [
            "2B 3F",
            "4F 6B",
            "2B 9F",
            "4B 6F",
            "2B 6F",
            "4F 9F"
        ],
        "output": "Y W"
    },
    {
        "input_1": "N 11 11",
        "input_2": [
            "2B 3F",
            "4F 6B",
            "2B 9F",
            "4B 6F",
            "2B 6F",
            "4F 9F"
        ],
        "output": "Y N"
    },
    {
        "input_1": "E 15 21",
        "input_2": [
            "2B 3F",
            "4F 6B",
            "2B 9F",
            "4B 6F",
            "2B 6F",
            "4F 9F"
        ],
        "output": "Y E"
    },
    {
        "input_1": "N 15 21",
        "input_2": [
            "2B 1F",
            "4F 2B",
            "2B 3F",
            "4B 5F",
            "2B 7F",
            "4F 1F"        
        ],
        "output": "N 2"
    },
    {
        "input_1": "S 15 21",
        "input_2": [
            "2F 1B",
            "1F 2B",
            "2F 3B",
            "4F 5B",
            "2F 7B",
            "4F 1B"
        ],
        "output": "N 17"
    }
]

// let input_1 = "N 11 11";
// let input_2 = ["2B 3F","4F 6B","2B 9F","4B 6F","2B 6F","4F 9F"];

// let input_1 = "E 15 21";
// let input_2 = ["2B 3F","4F 6B","2B 9F","4B 6F","2B 6F","4F 9F"];

// let input_1 =  "S 15 21";
// let input_2 =  ["2F 1B","1F 2B","2F 3B","4F 5B","2F 7B","4F 1B"];

// let input_1 = "N 15 21";
// let input_2= ["2B 1F","4F 2B","2B 3F","4B 5F","2B 7F","4F 1F"];
        
// let input_1 = "E 4 4";
// let input_2 = ["2F 2F","2B 2B"];



let directionFind = (input_1,input_2) =>{
    let goingDirection = '';
    let initialPosition = 0;
    let forward; // forward direction
    let backward; //backward direction
    let distance = [];
    let res = input_1.split(" ");

    goingDirection = res[0];

    // console.log(goingDirection);

    for(i=1; i<=res.length-1; i++){
        distance.push(parseInt(res[i]));
    }

    let directionData = [];
    let res1;
    for(i=0; i<=input_2.length-1; i++){
        res1 = input_2[i].split(' ');
        directionData.push(res1[0])
        directionData.push(res1[1])
    }
    // console.log(directionData);


    for(i=0; i<=directionData.length-1; i++){

        if(directionData[i].slice(1,2)==='F'){
            initialPosition += parseInt(directionData[i].slice(0,1));
            // console.log(initialPosition);
            if(initialPosition === distance[1]){
                console.log(`Y ${goingDirection}`);
                return
            }
        }
        else{
            initialPosition -= parseInt(directionData[i].slice(0,1))
            if(initialPosition === distance[2]){
                console.log(`Y ${goingDirection}`);
                return
            }
        }
    } 
    // console.log(initialPosition);

    if(goingDirection === 'E'){
        forward = distance[0];
        backward = -Math.abs(distance[1]);
        if(initialPosition>forward){
            console.log(`Y E`);
        }
        else if(initialPosition<backward){
            console.log('Y W');
        }
        else if(initialPosition>backward && initialPosition<=0){
            console.log(`N ${backward-initialPosition}`);
        }
        else{
            console.log(`N ${forward+initialPosition}`);
        }
    }

    else if(goingDirection === 'W'){
        forward = -Math.abs(distance[0])
        backward = distance[1];
        
        if(initialPosition<forward){
            console.log(`Y E`);
        }
        else if(initialPosition>backward){
            console.log('Y W');
        }
        else if(initialPosition<backward && initialPosition<=0){
            console.log(`N ${backward-initialPosition}`);
        }
        else{
            console.log(`N ${forward-initialPosition}`);
        }
    }

    if(goingDirection === 'N'){
        forward = distance[0];
        backward = -Math.abs(distance[1]);

        if(initialPosition>forward){
            console.log(`Y N`);
        }
        else if(initialPosition<backward){
            console.log('Y S');
        }
        else if(initialPosition>backward && initialPosition<=0){
            console.log(`N ${backward+initialPosition}`);
        }
        else{
            console.log(`N ${forward-initialPosition}`);
        }
    }

    else if(goingDirection === 'S'){
        forward = -Math.abs(distance[0])
        backward = distance[1];
        // console.log(initialPosition);
        
        if(initialPosition<forward){
            console.log(`Y N`);
        }
        else if(initialPosition>backward){
            console.log('Y S');
        }
        else if(initialPosition<backward && initialPosition<=0){
            console.log(`N ${backward+initialPosition}`);
        }
        else if(initialPosition<forward && initialPosition>=0){
            console.log(`N ${forward-initialPosition}`);
        }
    }
}


for(let i=0; i< inputs.length; i++){
    input_1 = inputs[i].input_1
    input_2 = inputs[i].input_2
    console.log('input_1: ', input_1);
    console.log('input_2: ', input_2);
    directionFind(input_1,input_2);
}


