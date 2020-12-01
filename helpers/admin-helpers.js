const { response } = require('express')
const collection = require('../config/collection')
var db = require('../config/connection')
/* var collection = require('../config/collections') */
/* const bcrypt = require('bcrypt'); */
/* const { reject, resolve } = require('promise');
var objectId = require('mongodb').ObjectId */
module.exports = {

    adminLogin:(details)=>{
        return new Promise(async (resolve, reject) => {
       let admin= await db.get().collection(collection. ADMIN_COLLECTION).findOne({name:details.name})
       if(admin){
           if(details.password==admin.password){
               response.admin=admin
               response.status=true
               resolve(response)
           }else{
               resolve({status:false})
           }
       }else{
        resolve({status:false})
       }
        })
        
    }

    }

     /*  if(details.name=='jagathgopan304@gmail.com' &&  details.password =='123'){
               resolve(true)
           }else{
               resolve(false)
           } */