let doors = [];
let openDoors = [];
let closedDoors = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

let doorDetails = () =>{
    for(let i=0; i<=100; i++){
        doors.push(i)
    }
    return doors
};
let doorRes = doorDetails();

let perfect = doors.map((perfectDoor)=>{
    let sqroot = Math.floor(Math.sqrt(perfectDoor));
    let square = sqroot*sqroot;
    if (perfectDoor ===square) {
        openDoors.push(perfectDoor);
    }
    else{
        closedDoors.push(perfectDoor);
    }
})
console.log(`Opened doors: \n ${JSON.stringify(openDoors)}`);
console.log(`Closed doors: \n ${JSON.stringify(closedDoors)}`);