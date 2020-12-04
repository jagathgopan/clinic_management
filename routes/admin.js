var express = require('express');
var router = express.Router();
const adminHelpers = require('../helpers/admin-helpers');

/* GET users listing. */
router.get('/', function (req, res) {
  if(req.session.loggedIn){
    res.redirect('admin/tabview')
  }else{

    res.render('admin/adminLogin',{'loginErr':req.session.loginErr});
    req.session.loginErr=false
  }
  
});
router.post('/admin-login', (req, res) => {
  
  adminHelpers.adminLogin(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.admin=response.admin   
      adminHelpers.getAllDoctors().then((doctors)=>{
        let admin=req.session.admin
        console.log(admin);
        res.render('admin/tabview',{doctors,admin});
      })
    }else{
      console.log("invalid password or userId");
      req.session.loginErr=true
      res.redirect('/admin')
    }
    })
})
/* router.get('/tab-view',(req,res)=>{
  adminHelpers.getAllDoctors().then((doctors)=>{
    res.render('admin/tabview',{doctors});
  })
 
}) */
router.get('/add-doctors',(req,res)=>{
  res.render('admin/addDoctor');
})
router.post('/add-doctors',(req,res)=>{
  console.log(req.body);
  adminHelpers.addDoctors(req.body).then((id)=>{
    let image=req.files.Image
  console.log(id)
  image.mv('./public/doctors-images/'+id+'.jpg',(err,done)=>{
    if(!err){
      res.render('admin/addDoctor')
    }else{
      console.log(err)
    }
    res.render('admin/addDoctor')
  })
  
   
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/admin')
})
module.exports = router;
