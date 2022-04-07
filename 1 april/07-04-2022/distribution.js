// let childrenAges = [9,5,8,1,4,2,6,8,5,6];
// let childrenAges = [8, 4, 2, 1, 3, 6, 7, 9, 5];
let childrenAges = [5,5];

//empty array of size childrenages filled with 1's
let mangoDistribution = new Array(childrenAges.length).fill(1);


//function
let distribution = (childrenAges,mangoDistribution) => {

    //forward traversal
    for(let i=0; i<childrenAges.length-1; i++){
        // console.log(childrenAges[i]);
        if(childrenAges[i]>=childrenAges[i+1]){
           continue;
        }
        mangoDistribution[i+1] = mangoDistribution[i] + 1;
    }

    //backward traversal
    for(let i=childrenAges.length-1; i>0; i--){
       if(childrenAges[i]>=childrenAges[i-1]){
           continue
       }
       mangoDistribution[i-1] = Math.max(mangoDistribution[i]+1, mangoDistribution[i-1]);
    }


    let sum = 0;
    mangoDistribution.map(mango =>{
        sum += mango;
    })
    console.log('sum:', sum);

    return mangoDistribution;
};

console.log(distribution(childrenAges,mangoDistribution));