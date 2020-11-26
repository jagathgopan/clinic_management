var express = require('express');
var router = express.Router();
const adminHelpers = require('../helpers/admin-helpers');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/adminLogin');
});
router.post('/admin-login', (req, res) => {
  adminHelpers.doLogin().then((response) => {
    res.render('admin/adminPanel');
  })
})
module.exports = router;
