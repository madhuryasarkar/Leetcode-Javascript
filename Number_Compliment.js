/*Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2. */

var findComplement = function(num) {
    
    var bin = (num >>> 0).toString(2);
    var arr = bin.split('');
    
    for(var i=0;i<arr.length;i++){
      
      if(arr[i] == 1){
        arr[i] = 0;
      } else {
        arr[i] = 1;
      }
    }
    
    var str = arr.join('');
    var dec = parseInt(str, 2);
    
    return dec;
};

findComplement(5);
