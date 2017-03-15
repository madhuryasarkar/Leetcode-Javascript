/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
   
var arr =s.split('');
arr.sort();
var count = 0;

//console.log(arr);

for(var i=0;i<arr.length;i++){
	if(arr[i] == arr[i+1]) count++;
	else count--;
}

if(arr.length%2 == 0){
	if(count ==0 || count == 4) return true;
	else return false;
} else {
	if(count == -1 || count>0) return true;
	else return false;
}

};
