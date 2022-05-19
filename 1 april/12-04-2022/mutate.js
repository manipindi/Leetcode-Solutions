let array = [2, 1, 2, 2, 2, 3, 4, 2, 2]
let toMove = 2

let mutate = (arr) => {
    let j=arr.length-1;
    for(let i=0; i<j; i++){
        while(i<j && arr[j]==toMove){
                j--;
        }
        if(i<j && arr[i]===toMove){
            //ES-6
            [arr[i],arr[j]] = [arr[j],arr[i]];
            j--;
        }        
    }
    return arr;
}

console.log(mutate(array));
// mutate(array);