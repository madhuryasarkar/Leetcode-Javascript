var s = "++++";
var result = [];

if(!s || s.length <2){
	return result;
}

for(var i=s.indexOf('++');i !=-1;i = s.indexOf('++',i+1)){
	s = s.substring(0,i)+"--"+s.substring(i+2);
	result.push(s);
	s = s.substring(0,i)+"++"+s.substring(i+2);
}

return result;
