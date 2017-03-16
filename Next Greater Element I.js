/**
 * @param {number[]} findNums 
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  //  var nums1 = [1,3,5,2,4];

//var nums2 = [6,5,4,3,2,1,7];
var result = [];

for(var i=0;i<nums1.length;i++){
	var ind = nums2.indexOf(nums1[i]);
	
	
	var int = nums2.length - nums2.indexOf(nums2[ind+1]);
	//console.log(int);
	if(nums2[ind+1]>nums1[i]) result.push(nums2[ind+1]);
	else{
	for(var m=0;m<int;m++){
		ind++;
		var count;
		if(nums2[ind+1]>nums1[i]) {result.push(nums2[ind+1]); count = true;break;}
		else count= false;
		//console.log(count);
	}
	if(count === false) result.push(-1);
	}
	
	
	
	
	
}

return result;


};
