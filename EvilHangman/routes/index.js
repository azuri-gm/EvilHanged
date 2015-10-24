var express = require('express');
var fs = require('fs');
var router = express.Router();

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

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Evil hangman!!',array: arr[28] });
});

router.post('/game', function (req,res){
  if(arr[req.body.length].length === 0){
    res.render('/error', {});
  }else{
    res.render ('game',{length:req.body.length,
              tries: req.body.tries,
              arr: arr[req.body.length-1]}
              );
  }
 });

router.get('/error', function(req, res, next){
  res.render('error', {});
});

module.exports = router;
