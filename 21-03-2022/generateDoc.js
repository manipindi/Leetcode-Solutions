let characters = "Bste!hetsi ogEAxpelrt x ";
let document  = "AlgoExpert is the Best!";


let generateDoc = (characters, document) =>{
    let charItems = characters.trim().split(" ");
   let documentItems = document.trim().split(" ");

//loop to push charItems & documentItems to arrays
    let charString = [];
    let documentString = [];

    for(i=0; i<=charItems.length-1; i++){
        for(j=0; j<=charItems[i].length-1; j++){
            charString.push(charItems[i][j])
        }
    }
    let charStringSorted = charString.sort();

    for(i=0; i<=documentItems.length-1; i++){
        for(j=0; j<=documentItems[i].length-1; j++){
            documentString.push(documentItems[i][j]);
        }
    }
    let documentItemSorted = documentString.sort();

    if(charStringSorted.length<documentItemSorted.length){
        return false
    }
    else if(documentItemSorted.length===0){
       return true
    }
    else{
        let charCount= {};
        let documentItemCount = {};

        for(i=0;i<=charStringSorted.length-1;i++){
            let num = charStringSorted[i];
            charCount[num] = charCount[num] ? charCount[num]+1 : 1;
        }


        for(i=0;i<=documentItemSorted.length-1;i++){
            let num = documentItemSorted[i];
            documentItemCount[num] = documentItemCount[num] ? documentItemCount[num]+1 : 1; 
        }
        

      let characterKeys = Object.keys(charCount);
      let documentKeys = Object.keys(documentItemCount);


      let status = true;
      
      for(let key of characterKeys){
         if(documentItemCount[key]<=charCount[key]){
         }
         else{
            status=false
            break
         }
      }
      return status;
   
    }
}

console.log(generateDoc(characters,document));
