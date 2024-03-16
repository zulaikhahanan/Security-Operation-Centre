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

//GET UiTM Dashboard Page
router.get('/UiTMDashboard', function(req, res, next) {
  res.render('UiTMDashboard');
});

//GET Red Team Page
router.get('/RedTeam', function(req, res, next) {
  res.render('RedTeam');
});

//GET Blue Team Page
router.get('/BlueTeam', function(req, res, next) {
  res.render('BlueTeam');
});

//GET Cyber Range Page
router.get('/CyberRange', function(req, res, next) {
  res.render('CyberRange');
});

//GET How UiTM SOC  Works Page
router.get('/UiTMSOC', function(req, res, next) {
  res.render('HowUiTMSOCWorks');
});

//GET Activities Page
router.get('/Activities', function(req, res, next) {
  res.render('Activities');
});

//Router Works a Middleware in the System
module.exports = router;
