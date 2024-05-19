var express =require('express')
const router=express.Router()

//controller
const controller=require("..//controller/UserController")
//  router.get('/',(req,res)=>{
//     console.log("user")
//     res.send("user created")
//  })
router.get('/',controller.get)
// router.post()

module.exports=router