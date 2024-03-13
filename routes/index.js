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
//Router Works a Middleware in the System
module.exports = router;
