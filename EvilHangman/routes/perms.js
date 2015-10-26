/*----------------------------------------------------------
 * Exam 2: Evil Hangman
 * Date: 26-Oct-2015
 * Authors:
 *           A01165829 Pedro Picapicapiedra Rodriguez 
 *           A01165988 Pablo Marmol Gaytán
 *----------------------------------------------------------*/
var a = getbiggest('e',array);
console.log(a);

function getbiggest(ch, arr){
	var map = {};
	var bigfam = [] ;
	var arrays = [];

	for(var i=0;i<arr.length;i++){
		if(map[getmask(ch,arr[i])] == undefined){
			map[getmask(ch,arr[i])] = [];
			map[getmask(ch,arr[i])].push(array[i]);
		}
		else{
			map[getmask(ch,arr[i])].push(array[i]);
		}	
	}
	for(var a in map){
		arrays.push(map[a]);
	}
	for(var i=0;i<arrays.length;i++){
		if(arrays[i].length > bigfam.length){
			bigfam = arrays[i];
		}
	}
	return bigfam;
}


function getmask(ch, word){
	var m ='';
	for(var i=0;i<word.length;i++){
		if(word.charAt(i) == ch){
			m = m+'1';
		}
		else{
			m = m+'0';
		}
	}
	return m;
}