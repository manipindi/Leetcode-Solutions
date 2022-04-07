
let arr = [345, 604, 321, 433, 704, 470, 808, 718, 517, 811];
arr.sort((a,b)=>a-b);
let ranges = [[300,350],[400,700]];


let find = (arr) => {
    for (let i = 0; i < ranges.length; i ++) {
        let binarySearch = (arr, target) => {
            let start = 0, end = arr.length - 1, mid = 0;
            while (start <= end) {
                mid = start + (end - start) / 2;
                if (arr[mid] < target) {
                    start = mid + 1;
                }
                else {
                    end = mid - 1;
                }
            }
            return end + 1;
        }
    
        let c = 0;
        let start = binarySearch(arr, 604);
        // let end = binarySearch(arr, ranges[i][1]);
    
        c = end - start;
        console.log(c + " ");
    }
}
find(arr);


