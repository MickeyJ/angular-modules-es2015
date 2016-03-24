var express = require('express');
var router = express.Router();
var mockData = require('../libs/mockdata');

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/test', (req,res,next) =>{
  res.json(mockData);
});

router.get('*', (req, res, next) =>{
  res.render('index.html', {
    root: __dirname + '/../dist/'
  });
});

module.exports = router;
