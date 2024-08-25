// create mongo comnnection
//step1 
const mongoes=require('mongoose');
//step 2
mongoes.connect('mongodb://localhost:27017/myretail',{useNewUrlParser: true})
//step 3"productname" : "addidas", "price" : "3456", "productdescription" : "addidas sports shoes"
var Product =mongoes.model('myprod',{prod_name:String,price:String,description:String})

//const p1= new Product({name:'nike',price:'145555',description:'addidas sports'})
// p1.save().then(res=>{
//     console.log("mongodb connected")
// }).catch(error=>{
//     console.log("error found")
// })

// api get 

var express =require('express')
var cors = require('cors')
var app=express();
app.use(cors())
var app = express()
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.listen(2004,function()

{

    console.log('listining at port  2004')
})
app.get('/',(req,res)=>{
    res.send('hello everyone how are you')
})
app.get('/product',(req,res)=>{
    const productData={name:"bat",price:"344"}
    // res.send(productData)
    Product.find().then(product=>{

        console.log("data found",product)

        res.send(product)
    }).catch(error=>{
        console.log("erroe",error)
    })
})
      
   // user cart payment 
   // post

   app.post("/addproduct", function (request, response) {
    console.log("post")
    console.log(request.body)
    const p2= new Product(request.body)
        p2.save().then(res=>{
            console.log("mongodb connected and saved")
            response.send("data inserted ")
        }).catch(error=>{
            console.log("error found")
        })
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
