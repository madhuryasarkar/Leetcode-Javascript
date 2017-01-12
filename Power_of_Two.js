// Given an integer, write a function to determine if it is a power of two. 

var isPowerOfTwo = function(n) {
    
    if(n<=0){
      return false;
    }
    if(n === 1 || n===2){
      return true;
    }
     while(n!==2){
       
       if(n%2 === 1){
         return false;
       } 
       n=n/2;
     }  
        return true;
     
    
    
};

isPowerOfTwo(128);
