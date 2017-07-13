var express = require('express');
var router = express.Router();
var db = require('../models/db');
/* GET home page. */
router.get('/', function(req, res, next) {
  return res.render('register', {});
  next();
});
router.post('/', function (req, res, next) {
  db.table('user').add({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    date: new Date().toLocaleString()
  }).then(function () {
    return res.render('login', {});
  }).catch(function (error) {
    return res.send(JSON.stringify({'message':'fail'}));
  })
});
module.exports = router;
