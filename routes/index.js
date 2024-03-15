const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
    res.render('index');
  });

//GET Contact Page
router.get('/contactUs', function(req, res, next) {
  res.render('contact');
});

//GET 404 Page
router.get('/404', function(req, res, next) {
  res.render('404');
});

//GET Detail Page
router.get('/detail', function(req, res, next) {
  res.render('detail');
});
//Router Works a Middleware in the System
module.exports = router;
