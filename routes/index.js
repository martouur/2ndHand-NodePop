var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'NODEPOP',
    description: 'Welcome to 2ndHand nodePop Webpage',
    mainDomain: 'https://2condhand.com/',
    nodepopDomain: 'https://nodepop.2condhand.com/'
  });
});

module.exports = router;
