//Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

var addStrings = function(num1, num2) {
    var arr1 = [];
    var arr2 = [];
    arr1.push(num1);
    arr2.push(num2);
    
    if(num1 === 0 && num2 === 0){
      return '0';
    }
    
    var res = '';
    res = arr1[0]+arr2[0];
    
    return res.toString();
    
};

addStrings(1,700);
