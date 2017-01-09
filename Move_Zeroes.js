
/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0]. */

 var moveZeros = function(nums){
  var i = 0,j = 1, len = nums.length;
  if(nums.length < 1){return nums[0] === 0 ? [nums[1],0] : nums;}
  
  for(i,j; j < len; ){
    if(nums[i] === 0 && nums[j] !== 0){
      var tmp = nums[j];
      nums[j] = nums[i];
      nums[i] = tmp;
      i++; j++;
      continue;
    }
    while(nums[i] !== 0 && i < len){ i++; }
    j = i + 1;
    while (nums[j] === 0 && j < len ) { j++; }
  }
  console.log(nums);
};
