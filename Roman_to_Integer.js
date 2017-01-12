//Given a roman numeral, convert it to an integer.



var romanToInt = function(s) {
    var result = 0;
    
    for(var i = 0; i < s.length; i++){
        if(i > 0 && (lookup(s[i]) > lookup(s[i-1]))){
            result -= 2*lookup(s[i-1]);
        }
        
        result += lookup(s[i]);
    }
    
    return result;
};

var lookup = function(c){
    switch(c){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
};

romanToInt('XIV');
