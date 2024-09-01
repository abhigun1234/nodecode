var mysql = require('mysql');
//connect
var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "retail55"
});

const express =require('express')
const app =express()
var cors = require('cors')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors())
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
//   var sql = "INSERT INTO product (product_name, product_price) VALUES ('bata', '230')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
});

  app.listen(2003,'',function()
  
  {
  
      console.log('listining at port  2003')
  })
  
  app.get('/getProductDetails',function(req,res){
    var objs = [];
  
      
      con.query("SELECT * FROM product ", function (err, result, fields) {
        
        console.log("err",err);
        console.log("result",result);
       
        //objs.push(result[0].product_name)
        for (var i = 0;i < result.length; i++) {
          objs.push({"productname": result[i].product_name,"product_price": result[i].product_price});
        
        }
        res.send(JSON.stringify(objs))
      });
      
    });
    //con.end() 

app.post('/data',urlencodedParser, function(req, res){
    var username=req.body.name;
    connection.query("INSERT INTO `names` (name) VALUES (?)", username.toString(), function(err, result){
        if(err) throw err;
            console.log("1 record inserted");
        });
    res.send(username);
});
app.post('/addproduct',urlencodedParser,function(req,res){
    console.log("req",req.body)
  //var data=req.body
  var data={"product_name":"icecream-amul","product_price":"233","product_desc":"ice"}
  console.log("data",data)
  console.log(data['product_name'])
  var sql = "INSERT INTO product (product_name, product_price,product_desc) VALUES ('bike-tvs', '30000000','automobile')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log("1 record inserted");

    else{
        res.send(" record inserted");
    }
  });

})