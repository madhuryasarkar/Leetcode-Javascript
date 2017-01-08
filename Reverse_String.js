/* Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh". */

var reverseString = function(s) {
  var arr =[];
  var newArr=[];
  var str;
  arr = s.split('');
  arr.reverse();
  newArr = arr.join('');
  str= newArr.toString();
  return str;
};

reverseString("Hello");
