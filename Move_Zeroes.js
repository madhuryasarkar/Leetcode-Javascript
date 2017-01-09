
/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0]. */

  
  Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};
var moveZeroes = function(nums) {

var result;
  
  for(var i=0; i<nums.length;i++){
    if(nums[i] === 0){
     nums.move(i,nums.length-1);
    }
  }
  return nums;
};
moveZeroes([0,1,0,5,8,7,0,1,5]);
