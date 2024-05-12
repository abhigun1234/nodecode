var express =require('express')
var app=express();
console.log(__dirname)
// app.use('/cssFile',express.static(__dirname + '/assets'))
//app.use(express.json) middle ware
app.listen(2004,function()

{

    console.log('listining at port  2004')
})

//get api
// app.get('/getProductDetails',function(req,res){
//     res.send("hello data")

// })
// app.post('/sendata',function(req,rs){

// }),
// app.put('/update')
// app.delete

app.get('/helloworld',function(req,res){
  jsonObj={name:"abhi"}
    res.send(jsonObj)
})
app.get('/byebye',function(req,res){

 res.send("bye bye")

})
app.get('/user',function(req,res){

    data=[{"id":1,"first_name":"Hayley","last_name":"Di Napoli","email":"hdinapoli0@spiegel.de","gender":"Female"},
    {"id":2,"first_name":"Port","last_name":"Aronovich","email":"paronovich1@google.com","gender":"Male"},
    {"id":3,"first_name":"Torrance","last_name":"McQueen","email":"tmcqueen2@altervista.org","gender":"Male"},
    {"id":4,"first_name":"Breanne","last_name":"Rehor","email":"brehor3@netvibes.com","gender":"Female"},
    {"id":5,"first_name":"Cornelius","last_name":"Snelman","email":"csnelman4@unblog.fr","gender":"Male"},
    {"id":6,"first_name":"Mora","last_name":"Brahms","email":"mbrahms5@nsw.gov.au","gender":"Female"},
    {"id":7,"first_name":"Alley","last_name":"Corteis","email":"acorteis6@unc.edu","gender":"Male"},
    {"id":8,"first_name":"Cathyleen","last_name":"Dumbarton","email":"cdumbarton7@nature.com","gender":"Female"},
    {"id":9,"first_name":"Julee","last_name":"Smedley","email":"jsmedley8@istockphoto.com","gender":"Female"},
    {"id":10,"first_name":"Cecelia","last_name":"Fayne","email":"cfayne9@npr.org","gender":"Female"}]
    res.send(data)
})
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3])
})
app.get('/api/courses/:pid',(req,res)=>{
res.send(req.params.pid)
})
// example of routing params with query string 
app.get('/api/posts/:year/:month',(req,res)=>{
    //res.send(req.params)
    res.send(req.query)
    })
    //http://localhost:2004/api/posts/2018/1?sortBy=name
//mongodb+srv://ghoshabhishek04:<password>@cluster0.pbctlhy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0