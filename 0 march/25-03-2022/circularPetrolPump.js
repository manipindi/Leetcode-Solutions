// Suppose there is a circle. There are n petrol pumps on that circle. You are given two sets of data.

// The amount of petrol that every petrol pump has.
// Distance from that petrol pump to the next petrol pump.
// Calculate the first point from where a truck will be able to complete the circle (The truck will stop at each petrol pump and it has infinite capacity). Expected time complexity is O(n). Assume for 1-litre petrol, the truck can go 1 unit of distance.
// For example, let there be 4 petrol pumps with amount of petrol and distance to next petrol pump value pairs as {4, 6}, {6, 5}, {7, 3} and {4, 5}. The first point from where the truck can make a circular tour is 2nd petrol pump. Output should be “start = 1” (index of 2nd petrol pump).


//class that holds the constructor values
class PetrolStation {
    constructor(petrol, distance) {
        this.petrol = petrol;
        this.distance = distance;
    }
};

const printMinTourIndex = (arr, n) => {
    let start = 0;
    let end = 1;

    let petrol_qty = arr[start].petrol - arr[start].distance;

    
    while (end != start || petrol_qty < 0) {

        while (petrol_qty < 0 && start != end) {
            // console.log(petrol_qty);
            petrol_qty -= arr[start].petrol - arr[start].distance;
            // console.log(petrol_qty);
            start = (start + 1) % n;

            if (start == 0)
                return -1;
        }

        petrol_qty += arr[end].petrol - arr[end].distance;

        end = (end + 1) % n;
    }

    return start;
}


//array holds the vales of class objects

// let arr = [new PetrolStation(4, 6), new PetrolStation(6, 5), new PetrolStation(7, 3), new PetrolStation(4, 5)];
// let arr = [new PetrolStation(6,4), new PetrolStation(3,6), new PetrolStation(7, 3)];
let arr = [new PetrolStation(4, 6), new PetrolStation(6, 3), new PetrolStation(6, 7)];
let n = arr.length;
let start = printMinTourIndex(arr, n);

if(start === -1){
    console.log(start);
}
else{
    console.log(`start = ${start}`);
}


//Test cases
// Input: (6,4),(3,6),(7,3)
// Output: 2
// Input: (4,6),(6,3),(6,7)
// Output: 1