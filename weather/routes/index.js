var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./public/dist/public/index.html'))
});

module.exports = router;
