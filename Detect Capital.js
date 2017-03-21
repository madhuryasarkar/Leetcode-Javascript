/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

var remain = word.slice(1);
var first = word.slice(0,1);


if(word.length === 1){
	return true;
	 
}
else{

	if(first == first.toUpperCase()){

for(var i=0;i<remain.length;i++){

if(remain == remain.toUpperCase()) return true;


if(remain == remain.toLowerCase()) return true;
else return false;
}
	} else {
		for(var i=0;i<word.length;i++){

			if(word == word.toUpperCase()) return true;


			if(word == word.toLowerCase()) return true;
			else return false;
	}
	}
}

};
