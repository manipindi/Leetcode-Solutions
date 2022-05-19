// Utility function to print a Vector
function printVector(V) {
	for (let e of V) {
		console.log(e + " ");
	}
	console.log("<br>");
}

// Function performs insertion sort on
// vector V
function insertionSort(V) {
	let N = V.length;
	let i, j, key;
    let count=0;

	for (i = 1; i < N; i++) {
		j = i;

		// Insert V[i] into list 0..i-1
		while (j > 0 && V[j] < V[j - 1]) {

			// Swap V[j] and V[j-1]
			let temp = V[j];
			V[j] = V[j - 1];
			V[j - 1] = temp;
            count++;
			// Decrement j by 1
			j -= 1;
		}
	}
    console.log(count);
}

// Driver Code
let A = [0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1,
  1, 1, 1];

console.log("Array: " + "<br>");
printVector(A);

console.log("After Sorting :" + "<br>");
insertionSort(A);
printVector(A);