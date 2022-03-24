// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].


// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


//  Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


// Follow up: Can you come up with an algorithm that runs in O(m + n) time?



//solution

let nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6], m = 3, n = 3;

// let nums1 = [1], m = 1, nums2 = [], n = 0

// let nums1 = [0], m = 0, nums2 = [1], n = 1

let merge = (nums1, nums2, m, n) =>{

    // if nums2 is empty, returns the nums1 array
    if(n===0){
        return nums1
    }

    //splice(i, j, element) i is the position, j is the number of  items need to remove and update the element, element is the item that needs to be added
    //so we add elements or replace from position of m in the nums1 array.
    for(i=m; i<nums1.length; i++){
        nums1.splice(i,1,nums2[i-m])
    }

    //bubble sort to sort the retuned num1 array from the top
    //initially swap is true and it will become false in the while loop and get backs to true if condition nums1[i]>nums1[i+1] 
    // if every time the if condition fails that means the elements in tha array nums1 are sorted and exits the while loop
    let swap = true;
    let count =0;

    while(swap){
        swap = false;

        for(i=0; i<nums1.length - count; i++){
            if(nums1[i]>nums1[i+1]){
                //if nums1[i] > nums1[i+1] the i'th is greater than next element(i+1) the elemets will be swapped 
                [nums1[i], nums1[i+1]] = [nums1[i+1], nums1[i]];
                swap = true;
            }
        }
        count++
    }
    
    return nums1
};
console.log(merge(nums1, nums2, m,n));
