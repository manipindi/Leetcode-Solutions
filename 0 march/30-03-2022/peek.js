let arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
// let arr =  [1, 2, 3, 4, 5, 1];
// let arr = [1,2,3,0,5,12,6,1]
// let arr = [5, 4, 3, 2, 1, 2, 1];

let longestPeak = (arr) => {

    let longestPeakLength = 0
    let i = 1;

    let leftIndex;
    let rightIndex;

    while (i < arr.length - 1) {

        let isPeak = arr[i - 1] < arr[i] && arr[i] > arr[i + 1]
        if (!isPeak) {
            i += 1;
            continue;
        }

        leftIndex = i - 2
        while (leftIndex >= 0 && arr[leftIndex] < arr[leftIndex + 1]) {
            leftIndex -= 1
        }

        rightIndex = i + 2
        while (rightIndex < arr.length && arr[rightIndex] < arr[rightIndex - 1]) {
            rightIndex += 1
        }

        let currentPeakLength = rightIndex - leftIndex - 1
        if (currentPeakLength > longestPeakLength) {
            longestPeakLength = currentPeakLength
        }


        i = rightIndex
        // break
    }
    for(let i=leftIndex+1; i<rightIndex; i++){
        console.log(arr[i]);
    }
    return `longest peek path ${longestPeakLength}`
}

console.log(longestPeak(arr));