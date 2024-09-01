const express = require('express')// imports
const app = express()
const port = 3000

// app.use(function(req,res,next){

// })
// get post,put delete

app.get('/',(req,res)=>{

res.send("welcome to the world of API node is great fff ")

})

// app.get('/api/welcome',(req,res)=>{

//     res.send("welcome to the world of API node is great  we love it! ")
    
//     })
 app.get('/api/products',(req,res)=>{
   products=[{id:1,name:"addidas",type:'sports',price:2000},
   {id:2,name:"addidas",type:'sports',price:2000},
   {id:3,name:"addidas",type:'sports',price:3000}]
   res.send(products)

 })   
    
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// app.get('/api/courses/:id',(req,res)=>{
//   console.log("req.params",req.params)
//     res.send(req.params.id)
// })
// app.get('/', (req, res) => {
//   console.log("sta")
//   let db
//   const MongoClient  = require("mongodb").MongoClient
//   const dburl = "mongodb://localhost:27017/retail"
//   MongoClient.connect(dburl, function(err, db) {
//     if (err) {
//       throw err;
//     }
//     console.log('db connected');
//     res.send('db connected')
//     db.close();
//   });
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,])
})
// app.get('/api/courses/:id',(req,res)=>{

//     res.send(req.params.id)
// })
// app.get('/api/person',(req,res)=>{
//     personData=[{"id":1,"first_name":"Joella","last_name":"Markussen","email":"jmarkussen0@360.cn"},
//     {"id":2,"first_name":"Delly","last_name":"Barstow","email":"dbarstow1@instagram.com"},
//     {"id":3,"first_name":"Milka","last_name":"Margery","email":"mmargery2@mapquest.com"},
//     {"id":4,"first_name":"Candis","last_name":"Guidera","email":"cguidera3@prnewswire.com"},
//     {"id":5,"first_name":"Jo","last_name":"Sauvage","email":"jsauvage4@goo.gl"}]
//     res.send(personData)
// })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })