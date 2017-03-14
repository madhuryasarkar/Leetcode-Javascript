
var findWords = function(input){
var compare = ["qwertyuiop","asdfghjkl","zxcvbnm"];

var row1 = compare[0].slice('');
var row2 = compare[1].slice('');
var row3 = compare[2].slice('');

/*if(row1.includes('q')) console.log("true");
else console.log("false");
*/

//var input = ["hello"];
var s;
var result = [];


for(var i=0;i<input.length;i++){
	
	s = input[i].slice('').toLowerCase();
	var temp = 0;
	
	for(var a=0;a<s.length;a++){
		
		if(row1.includes(s[a])) {temp++;}
		else {break;}
	} //console.log(temp);
	if(temp == input[i].length) {result.push(input[i]);}
	
	temp = 0;
for(var a=0;a<s.length;a++){
		if(row2.includes(s[a])) {temp++;}
		else  {break;}
}//console.log(temp);
if(temp == input[i].length) {result.push(input[i]);}

temp = 0;
for(var a=0;a<s.length;a++){
	if(row3.includes(s[a])) {temp++;}
	else {break;}
} //console.log(temp);
if(temp == input[i].length) {result.push(input[i]);}	

}

console.log(result);
return result;
}

findWords(["hello", "Alaska", "Dad", "peace","qwee"]);
