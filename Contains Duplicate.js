// Given an array of integers, find if the array contains any duplicates.
//Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

var containsDuplicate = function(nums) {
  
  var length = nums.length;
  var sett = new Set();
  
  if(length === 1){
    return false;
  }
  
  for(var i in nums){
    if(sett.has(nums[i])){
      return true;
    } else {
      sett.add(nums[i]);
    }
  }
  return false;
  
  
};

containsDuplicate([1,3,4,5,4]);
