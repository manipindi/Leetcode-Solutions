let childrenAges = [9,5,8,1,4,2,6,8,5,6];
// let childrenAges = [8, 4, 2, 1, 3, 6, 7, 9, 5];
let mangoDistribution = new Array(childrenAges.length).fill(1);

// console.log(mangoDistribution.length-1);

let distribution = (childrenAges,mangoDistribution) => {
    for(let i=0; i<childrenAges.length-1; i++){
        if(childrenAges[i]>childrenAges[i+1]){
           continue;
        }
        console.log(i);
    }
    // console.log(mangoDistribution);

};

distribution(childrenAges,mangoDistribution);