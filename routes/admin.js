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
module.exports = router;
