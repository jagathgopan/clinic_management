var express = require('express');
var router = express.Router();
const adminHelpers = require('../helpers/admin-helpers');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/adminLogin');
});
router.post('/admin-login', (req, res) => {

  adminHelpers.adminLogin(req.body).then((response)=>{
    if(response.status){
     res.render('layout/layout')
    }else{
      console.log("invalid password or userId");

      res.redirect('/admin')
    }
    })
})
router.get('/doctor-list',(req,res)=>{
  res.render('admin/doctorList')
})
module.exports = router;
