let word = 'Hello world';
// let word = ' fly me  to  the moon';
// let word = 'luffy is still joyboy';
let res = [];

let lastWordLen = (s) =>{
    let words = s.split(' ');
    for(let i=0; i<=words.length-1; i++){
        if(i===words.length-1){
            console.log(words[i].length);
        }
    }
}
lastWordLen(word)