var express =require('express')
const router=express.Router()

//controller
const controller=require("..//controller/UserController")
//  router.get('/',(req,res)=>{
//     console.log("user")
//     res.send("user created")
//  })


 router.get('/',(req,res)=>{
    const data=[{"first_name":"Prinz","last_name":"Sayburn","email":"psayburn0@state.tx.us","gender":"Male"},
     {"first_name":"Norrie","last_name":"Powlesland","email":"npowlesland1@si.edu","gender":"Female"},
     {"first_name":"Tessie","last_name":"Franz-Schoninger","email":"tfranzschoninger2@dedecms.com","gender":"Non-binary"},
     {"first_name":"Aline","last_name":"Crannell","email":"acrannell3@tamu.edu","gender":"Female"},
     {"first_name":"Murdock","last_name":"McKevany","email":"mmckevany4@wufoo.com","gender":"Male"},
     {"first_name":"Giorgi","last_name":"Cremins","email":"gcremins5@senate.gov","gender":"Male"},
     {"first_name":"Kev","last_name":"Pilsworth","email":"kpilsworth6@flickr.com","gender":"Male"},
     {"first_name":"Kaleb","last_name":"Andriesse","email":"kandriesse7@usnews.com","gender":"Male"},
     {"first_name":"Lyndell","last_name":"Burchard","email":"lburchard8@de.vu","gender":"Agender"},
     {"first_name":"Benedetto","last_name":"Tander","email":"btander9@multiply.com","gender":"Male"}]
   res.send(data)
 })
 router.post('/',(req,res)=>{
    const data=[{"first_name":"Prinz","last_name":"Sayburn","email":"psayburn0@state.tx.us","gender":"Male"},
     {"first_name":"Norrie","last_name":"Powlesland","email":"npowlesland1@si.edu","gender":"Female"},
     {"first_name":"Tessie","last_name":"Franz-Schoninger","email":"tfranzschoninger2@dedecms.com","gender":"Non-binary"},
     {"first_name":"Aline","last_name":"Crannell","email":"acrannell3@tamu.edu","gender":"Female"},
     {"first_name":"Murdock","last_name":"McKevany","email":"mmckevany4@wufoo.com","gender":"Male"},
     {"first_name":"Giorgi","last_name":"Cremins","email":"gcremins5@senate.gov","gender":"Male"},
     {"first_name":"Kev","last_name":"Pilsworth","email":"kpilsworth6@flickr.com","gender":"Male"},
     {"first_name":"Kaleb","last_name":"Andriesse","email":"kandriesse7@usnews.com","gender":"Male"},
     {"first_name":"Lyndell","last_name":"Burchard","email":"lburchard8@de.vu","gender":"Agender"},
     {"first_name":"Benedetto","last_name":"Tander","email":"btander9@multiply.com","gender":"Male"}]
   res.send(data)
 })
 
// router.get('/',controller.get)

module.exports=router