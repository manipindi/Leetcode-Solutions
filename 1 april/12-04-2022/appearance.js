let arr = [2, 1, 1, 5, 2, 3, 3, 4];
// let arr = [2, 1, 5, 3, 3, 2, 4];
// let arr = [2, 1, 5, 2, 3, 3, 4];


//Using Array operations
let firstDuplicate = (arr) => {
    let result = [];
    for (let i in arr) {
      if (result.includes(arr[i])) {       
        return arr[i]; 
      }
      result.push(arr[i]);
    }
    return -1;
  }
  
console.log(firstDuplicate(arr))


//Using Set
let appearance = (arr) => {

    let set = new Set();
    for (let item in arr) {
        if (set.has(arr[item])) {
            return arr[item];
        }
        else {
            set.add(arr[item]);
        }
    }
    return -1;

}
console.log(appearance(arr));