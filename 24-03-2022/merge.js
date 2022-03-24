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
