function print(arr)
{
     
    // Number of arrays
    let n = arr.length;
     
    // To keep track of next element in
    // each of the n arrays
    let indices = new Array(n);
     
    // Initialize with first element's index
    for(let i = 0; i < n; i++)
        indices[i] = 0;
     
    while (true)
    {
     
        // Print current combination
        for(let i = 0; i < n; i++)
            console.log(
            arr[i][indices[i]] + " ");
          
        console.log("<br>");
         
        // Find the rightmost array that has more
        // elements left after the current element
        // in that array
        let next = n - 1;
        while (next >= 0 && (indices[next] + 1 >=
                                 arr[next].length))
            next--;
         
        // No such array is found so no more
        // combinations left
        if (next < 0)
            return;
         
        // If found move to next element in that
        // array
        indices[next]++;
         
        // For all arrays to the right of this
        // array current index again points to
        // first element
        for(let i = next + 1; i < n; i++)
            indices[i] = 0;
    }
}
 
// Driver code
 
// Initializing a vector with 3 empty vectors
let arr = new Array(3);
for(let i = 0; i < arr.length; i++)
    arr[i] = [];
 
// Now entering data
// [[1, 2, 3], [4], [5, 6]]
// arr[0].push(1);
// arr[0].push(2);
// arr[0].push(3);
// arr[1].push(4);
// arr[2].push(5);
// arr[2].push(6);
arr = [[2],[3,4],[6,5,7],[4,1,8,3]]
 
print(arr);