let arr1 = [-1, 5, 10, 20, 28, 3];
let arr2 = [26, 134, 135, 15, 17];

let smallestDifference = (arr1, arr2) => {
    arr1.sort((a,b)=>{
        return a-b;
    });
    arr2.sort((a,b)=>{
        return a-b;
    });
    
    let a = 0;
    let b = 0;

    let element1;
    let element2;
    let result = Number.MAX_SAFE_INTEGER;
    while(a < arr1.length && b < arr2.length){

      if(Math.abs(arr1[a] - arr2[b]) < result){
        result = Math.abs(arr1[a] - arr2[b]);
      }
      element1 = arr1[a];
      element2 = arr2[b];
      if (arr1[a] < arr2[b]) {
        a++;
      } else{
        b++;
      }
    }
    console.log(element1,element2);
    return result;
  }

console.log(smallestDifference(arr1,arr2));