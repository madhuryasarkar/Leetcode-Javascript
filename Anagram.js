/Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false. */    
    
var isAnagram = function(s, t) {

  var sarr = s.split('').sort();
  var tarr = t.split('').sort();
  
  for(var i=0;i<sarr.length;i++){
    for(var j=0;j<tarr.length;j++){
      if(sarr[i]===tarr[j]){
        return true;
      } else {
        return false;
      }
      
    }
    
    return false;
  }
  
};

isAnagram("car","rac");
