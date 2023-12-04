let express = require('express');
let db = require('../utils/db')
let router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});



module.exports = router;
