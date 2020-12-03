var express = require('express');
var router = express.Router();
const adminHelpers = require('../helpers/admin-helpers');

/* GET users listing. */
router.get('/', function (req, res) {
  res.render('admin/adminLogin');
});
router.post('/admin-login', (req, res) => {

  adminHelpers.adminLogin(req.body).then((response)=>{
    if(response.status){
     res.render('admin/adminpanel')
    }else{
      console.log("invalid password or userId");

      res.redirect('/admin')
    }
    })
})
router.get('/tab-view',(req,res)=>{
  res.render('admin/tabview');
})
router.get('/add-doctors',(req,res)=>{
  res.render('admin/addDoctor');
})
router.post('/add-doctors',(req,res)=>{
  console.log(req.body);
  adminHelpers.addDoctors(req.body).then((response)=>{
    res.render('admin/addDoctor')
  })
})
module.exports = router;
