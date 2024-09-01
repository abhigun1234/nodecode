const mongoose = require('mongoose');
async function start() {
  console.log("called")
  try {
    //Database Connect
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/ecomm-may-batch',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Database Connected");
      }
    );

    // app.listen(3000, () => {
    //   console.log("Server is running on port 3000 ...");
    // });
  } catch (error) {
    console.error(error);
  }
}
start()
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/retail', {useNewUrlParser: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
// Cat.find(function (err, data) {
//     if (err) return console.error(err);
//     console.log(data);
//   })
/*

creating customer collection 
*/

// //step1 
// const mongoes=require('mongoose');
// //step 2
// mongoes.connect('mongodb://localhost:27017/ecomm-may-batch',{useNewUrlParser: true})
// //step 3"productname" : "addidas", "price" : "3456", "productdescription" : "addidas sports shoes"
// const Product =mongoes.model('product',{name:String,price:String,description:String})
// const p1= new Product({name:'addidas',price:'2345',description:'addidas sports'})
// p1.save().then(() => console.log('done'));
// Product.findOne(function (err, data) {
//             if (err) return console.error(err);
//             console.log(data)
//             for (i=0;i<data.length;i++)
//                 {
//                     console.log(data[i].name);
//                 }
//            res.send(data[0].name)
//           })

//find the custmer data 


      var express =require('express')
      var app=express();
      console.log(__dirname)
      //app.use('/cssFile',express.static(__dirname + '/assets'))
      app.listen(2004,function()
      
      {
      
          console.log('listining at port  2003')
      })
      
      app.get('/getProduct',function(req,res){
        Product.find(function (err, data) {
            if (err) return console.error(err);
            // for (i=0;i<data.length;i++)
            //     {
            //         console.log(data[i].name);
            //     }
            res.send(data[0].name)
          })
    
      
          
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
