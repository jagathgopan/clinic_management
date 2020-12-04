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
        
    },
    addDoctors:(doctors)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection. DOCTORS_COLLECTION).insertOne(doctors).then((data)=>{
                resolve(data.ops[0]._id)
            })

        })
        
    },
    getAllDoctors:()=>{
        return new Promise (async(resolve,reject)=>{
            let doctors=await db.get().collection(collection. DOCTORS_COLLECTION).find().toArray()
            resolve(doctors)
        })

    }

    }

     