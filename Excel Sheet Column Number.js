// Given a column title as appear in an Excel sheet, return its corresponding column number.


var titleToNumber = function(s) {
     var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     var i,j;
     var result = 0;

  for (i = 0, j = s.length - 1; i < s.length; i += 1, j -= 1) {
    result += Math.pow(base.length, j) * (base.indexOf(s[i]) + 1);
  }

  return result;
};
