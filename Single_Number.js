
//Given an array of integers, every element appears twice except for one. Find that single one.

 var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b);
};
  
  singleNumber([1]);
