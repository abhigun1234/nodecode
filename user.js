//step1 
const mongoes=require('mongoose');
//step 2
mongoes.connect('mongodb://localhost:27017/e-learning',{useNewUrlParser: true})
//step 3"productname" : "addidas", "price" : "3456", "productdescription" : "addidas sports shoes"
const express=require('express');
const app=express();
//post api
const BodyParser = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
const User =mongoes.model('euser',{name:String,password:String,email:String})
app.listen(3000, () => {
    console.log("Listening at :3000...");
});
app.get('/',(req,res)=>{
    res.send("hello")
})
app.post('/adduser',function(req,res){
  var data=req.body
  var name=data.name
  var email=data.email
  var password=data.password
  console.log("name",name)
  console.log("email",email)
  
//async function addUser(name,password,email)
{
    try
    {
        const euser= new User({name:name,password:password,email:email})
        console.log("user",euser)
        euser.save()
    //console.log(result)
       res.send("user added")    
    }
    catch(error)
    {
        console.log("error",error)
    }
    
}
 
 

})
