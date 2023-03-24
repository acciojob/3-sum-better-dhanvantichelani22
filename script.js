function threeSum(arr, target) {
// write your code here
   let arr1 = [];
	let targ = 0;
	for(let i=0;i<arr.length;i++){
		
		arr1.push(arr[i]);
		
		arr1 += targ+arr[i];
	}
	return arr1;
}

module.exports = threeSum;
