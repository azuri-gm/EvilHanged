/*----------------------------------------------------------
 * Exam 2: Evil Hangman
 * Date: 26-Oct-2015
 * Authors:
 *           A01165829 Pedro Picapicapiedra Rodriguez 
 *           A01165988 Pablo Marmol Gaytán
 *----------------------------------------------------------*/
 
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
