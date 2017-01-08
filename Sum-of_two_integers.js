//Adding 2 numbers without using the + or - operator

  var getSum = function(a, b) {
     var carry;
     while(b!== 0){
       
       carry = a&b;
       a= a^b;
       b = carry << 1;
     }
     
     return a;
   };

getSum(1,2);
