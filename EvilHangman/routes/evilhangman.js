var fs = require('fs');

var arr = new Array();

fs.readFile('dictionary.txt',function(err,data){
  if(err) {
    throw err;
  }
  for (var i=0; i<29;i++) {
    arr.push(new Array());
    }
  var temp =0;
  var word ;
    var info = data.toString().split('\n');
    for(var i = 0; i < info.length; i++) {
        var n= info[i].trim().length-1;
        arr[n].push(info[i].trim());
  }
  for (var i=0;i<arr.length;i++) {
    console.log(i+1+': '+arr[i].length);
  }
 });
