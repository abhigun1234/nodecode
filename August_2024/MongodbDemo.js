//step1 
const mongoes=require('mongoose');
//step 2
mongoes.connect('mongodb://localhost:27017/ecomm-aug-batch',{useNewUrlParser: true})
//step 3"productname" : "addidas", "price" : "3456", "productdescription" : "addidas sports shoes"
var Product =mongoes.model('product',{name:String,price:String,description:String})
const p1= new Product({name:'addidas',price:'2345',description:'addidas sports'})
p1.save().then(() => console.log('done'));
// Product.find(function (err, data) {
//             if (err) return console.error(err);
//             console.log(data)
//             for (i=0;i<data.length;i++)
//                 {
//                     console.log(data[i].name);
//                 }
//            res.send(data[0].name)
//           })
 // Use the findOne method to find the user
 

// find the custmer data 
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(2004,function()

{

    console.log('listining at port  2004')
})
app.get('/',(req,res)=>{
    res.send('hello everyone how are you')
})
app.get('/hello',(req,res)=>{
    res.send('hello world')
})
app.get('/product',(req,res)=>{
    Product.find()
 .then(product => {
   if (product) {
     console.log('Product found:', product);
     res.send(product)
   } else {
     console.log('Productt not found');
   }
 })
 .catch(error => {
   console.error('Error finding Product:', error);
 });
})
app.post("/addproduct", function (request, response) {
    console.log("post")
    console.log(request.body)
    // try {//1
    //     const menuSchima=new mongoose.Schema({
            
    //             name:String,
    //             price:String,
    //             description:String
    //         })
    //     console.log(request.body)
    //     //2
    //     const Menu=mongoose.model('menu',menuSchima)
    //      //var menu = new rmenuModel(request.body);
    //      //3
    //      const menu=new User(request.body)
    //      //console.log(menu)
    //       var result =  menu.save();
    //       response.send("added user ");
    // } catch (error) {
    //     response.status(500).send(error);
    //     console.log(error)
    // }
});
