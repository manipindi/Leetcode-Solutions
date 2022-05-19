function selectionSorting(inputArr) {
    let count = 0;
    for (var i = 0; i < inputArr.length; i++) {
        var tempEle = inputArr[i];
        for (var j = i + 1; j < inputArr.length; j++) {
            if (tempEle > inputArr[j]) {
                tempEle = inputArr[j];
                count++
            }
        }
        var index = inputArr.indexOf(tempEle);
        var tempVal = inputArr[i];
        inputArr[i] = tempEle;
        inputArr[index] = tempVal;
    }
    console.log(count);
}
var inputArr = [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1];

selectionSorting(inputArr);
console.log("Here is the sorted array: ", inputArr);