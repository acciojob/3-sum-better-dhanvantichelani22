function threeSum(arr, target) {
// write your code here
 //   let arr1 = [];
	// let targ = 0;
	// for(let i=0;i<arr.length;i++){
		
	// 	arr1.push(arr[i]);
		
	// 	arr1 += targ+arr[i];
	// }
	// return arr1;
	arr.sort((a,b)=>a-b);
let ans =9999999;
	const n=arr.length;
	for(let i=0;i<n-2;i++){
		for(let j=i+1;j<n-1;j++){
			for(let k=j+1;k<n;k++){
				let sum=arr[i]+arr[j]+arr[k];
				if(Math.abs(target-sum)<ans){
					ans = sum;
				}
			}
		}
	}
	return ans
}

module.exports = threeSum;
