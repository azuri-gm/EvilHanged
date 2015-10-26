/*----------------------------------------------------------
 * Exam 2: Evil Hangman
 * Date: 26-Oct-2015
 * Authors:
 *           A01165829 Pedro Picapicapiedra Rodriguez 
 *           A01165988 Pablo Marmol Gaytán
 *----------------------------------------------------------*/
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
  res.render('index', { title: 'Evil hangman!!'});
});

router.post('/game', function (req,res){
  console.log('it went through here');
  req.session.len = req.body.len;
  req.session.tries = req.body.tries;

  req.session.arr = arr[req.session.len-1];
  console.log(req.session.arr);
  console.log(req.session.len);
  console.log(req.session.tries);
  console.log(req.session.arr.length);
  
  if(req.session.arr.length === 0 && req.session.len > 0 && req.session.len <= 26){
    res.render('/error', {});
  }else{
    res.render ('game',{length:req.session.len,
              tries: req.session.tries,
              arr: req.session.arr}
              );
  }
 });

router.get('/error', function(req, res, next){
  res.render('error', {});
});

router.get('/winner', function(req, res, next){
  res.render('winner', {});
});

router.get('/loser', function(req, res, next){
  res.render('loser', {});
});

module.exports = router;
