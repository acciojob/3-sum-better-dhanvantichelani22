// The code takes in two parameters, an array of integers and a target integer. It then sorts the array in ascending order using the JavaScript built-in sort method. Sorting the array allows us to easily track the closest sum to the target integer.
 
// The code then initializes variables left, right, and closestSum to 0, len-1, and a large positive number, respectively. left and right represent the leftmost and rightmost indexes in the array that we will compare to the target integer. closestSum is the closest sum we have found so far, initialized to a large positive number so that the first sum we find will always be closer.
 
// The code then uses a nested while loop to compare the current sum of three elements to the target integer. The outer loop iterates through the first element in the array, while the inner loop iterates through the remaining two elements by adjusting the left and right pointers accordingly.
 
// For each sum we calculate, we compare it to the target integer and update the closestSum variable if the current sum is closer than the previous closest sum.
 
Finally, the function returns the closest sum found.
function threeSum(arr, target) {
  //your code here
  arr.sort((a,b)=>a-b)
 
        // console.log(arr)
        let len = arr.length
        let closestSum = 10000000;
        for(let i=0;i<=len-3;i++){
            // len-1
            // len-2
            // len-3
            let left = i+1;
            let right = len-1;
 
            while(left<right){
                let currSum = arr[i]+arr[left]+arr[right]
 
                if(Math.abs(currSum-target)<Math.abs(closestSum-target))
                    closestSum = currSum
 
                if(currSum>target)
                    right--
                else
                    left++
            }
        }
        return closestSum;
}
 
module.exports = threeSum;