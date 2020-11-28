var db = require('../config/connection')
/* var collection = require('../config/collections') */
/* const bcrypt = require('bcrypt'); */
/* const { reject, resolve } = require('promise');
var objectId = require('mongodb').ObjectId */
module.exports = {

    adminLogin:(details)=>{
        return new Promise(async (resolve, reject) => {
           if(details.name=='jagathgopan304@gmail.com' &&  details.password =='123'){
               resolve({status: true})
           }else{
               resolve({status:false})
           }
        })
        
    }

    }
