var express =require('express')
var app=express();
const userRoutes=require('./routes/User')
const productRoutes=require('./routes/Product')
app.use('/product',productRoutes)
app.use('/user',userRoutes)
// console.log(__dirname)
// app.use('/cssFile',express.static(__dirname + '/assets'))
//app.use(express.json) middle ware
app.listen(2004,function()

{

    console.log('listining at port  2004')
})
// get
app.get('/',(req,res)=>{

    res.send("hi everyone how are you")
})
//post
//put
//delete
