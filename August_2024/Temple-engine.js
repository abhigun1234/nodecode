const { json } = require('body-parser');
var express =require('express')
var app=express();
app.set('view engine', 'pug');
const hbs = require('hbs')
app.set('views','./views');
app.listen(2004,function()

{

    console.log('listining at port  2004')
})
app.get('/first_template', function(req, res){
    res.render('first_view');
 });
 app.get('/second_template', function(req, res){
    res.render('demo');
 });
 