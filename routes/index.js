var express = require('express');
var fs = require('fs');
var router = express.Router();
var MOCK_DATA = require('../libs/MOCK_DATA');

router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/user-list', (req,res) =>{
  res.json(MOCK_DATA);
});

router.get('*', (req, res, next) =>{
  res.render('index.html', {
    root: __dirname + '/../public/'
  });
});

module.exports = router;
