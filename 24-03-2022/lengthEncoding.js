// let string = "AAAAAAAAAAAAABBCCCCDD";
// let string = 'aA';
// let string = '122333';
// let string = '************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA'; 
// let string = 'AAAAAAAAAAAAABBCCCCDD';

let string = '        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';


let stringArray = string.split('');

let runEncode = (stringArray) =>{
    let i=0
    let outPutstring = '';
    while(i<stringArray.length){
        let count = 1;
        while(i<stringArray.length && stringArray[i]===stringArray[i+1]){
            count++;
            if(count===9){
                outPutstring += `${count}${stringArray[i]}`;
                count=1;
            }
            i++
        }
        outPutstring += `${count}${stringArray[i]}`;
        i++
    }
    return outPutstring
}

console.log(runEncode(stringArray));
