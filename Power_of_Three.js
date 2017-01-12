//Given an integer, write a function to determine if it is a power of three.




var isPowerOfThree = function(n) {
    
    if(n<=0){
      return false;
    }
    if(n === 1 || n===3){
      return true;
    }
     while(n!==3){
       
       if(n%3 === 1 || n%3 === 2){
         return false;
       } 
       n=n/3;
     }  
        return true;
     
    
    
};

isPowerOfThree(27);
