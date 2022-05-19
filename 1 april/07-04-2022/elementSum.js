let arr1= [1,2,5,7,8];
let arr2 = [4,8,9,8];

let max = Math.max(arr1.length,arr2.length);

let sum = []

let result = [];

let add = (arr1,arr2,sum) => {
    for (let i = 0; i < max; i++) {
        if(arr1[i] && arr2[i]){
            sum.push(arr1[i]+arr2[i])
        }
        else{
            sum.push(arr1[i]);

        }
    }
    console.log(sum);
    for(let i=0; i<sum.length; i++){
        if(sum[i]<9){
            result.push(sum[i]);
        }
        if(sum[i]>9){
            // let number = `${sum[i]}`
            let string = sum[i].toString();
            // console.log(typeof(number));
            for(j=0; j<string.length; j++){
                result.push(parseInt(string[j]))
            }
        }
    }
    console.log(result);
    
}

// console.log(add(arr1,arr2,sum));
add(arr1,arr2,sum)
 
