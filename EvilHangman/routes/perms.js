
var array = [];
for(var i=0;i<131072;i++){
	var arr = i.toString(2).split("");
	array[i] = arr;
}
for(var i=0;i<array.length;i++){
	while(array[i].length < 17){
		array[i].unshift('0');
	}
}

console.log('done');