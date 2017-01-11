/* Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true */

var canConstruct = function(ransomNote, magazine) {
    var ind;
    for(var i = 0; i < ransomNote.length; i++){
        ind = magazine.indexOf(ransomNote[i]);
        if(ind >= 0){
            magazine = magazine.slice(0,ind)+magazine.slice(ind+1);
        }else{
            return false;
        }
    }
    return true;
};

canConstruct("aa","bab");
