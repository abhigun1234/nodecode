var express =require('express')
var app=express();

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
app.get('/person',(req,res)=>{

    jsonObj=[{"id":1,"first_name":"Lesly","last_name":"Pomeroy","email":"lpomeroy0@w3.org","gender":"Female"},
        {"id":2,"first_name":"Whitney","last_name":"Bamell","email":"wbamell1@zdnet.com","gender":"Female"},
        {"id":3,"first_name":"Sibbie","last_name":"Lewington","email":"slewington2@storify.com","gender":"Genderqueer"},
        {"id":4,"first_name":"Forrester","last_name":"O'Carrol","email":"focarrol3@cocolog-nifty.com","gender":"Male"},
        {"id":5,"first_name":"Roseanna","last_name":"Welsby","email":"rwelsby4@uol.com.br","gender":"Polygender"}]
        res.send(jsonObj)
})