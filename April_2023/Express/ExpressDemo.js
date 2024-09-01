const express = require('express')
const app = express()
const port = 3000
// middle ware 
app.use(express.json())// body.res
app.set('view engine','pug')
app.set('views','./views')
app.use(express.urlencoded())//req.body
app.use(express.static('public'))
app.get('/', (req, res) => {
//   res.send('Hello World!')
res.render('index',{title:"My App",message:"Hello how are you "})
})
app.get('/api/person',(req,res)=>{
    personData=[{"id":1,"first_name":"Joella","last_name":"Markussen","email":"jmarkussen0@360.cn"},
    {"id":2,"first_name":"Delly","last_name":"Barstow","email":"dbarstow1@instagram.com"},
    {"id":3,"first_name":"Milka","last_name":"Margery","email":"mmargery2@mapquest.com"},
    {"id":4,"first_name":"Candis","last_name":"Guidera","email":"cguidera3@prnewswire.com"},
    {"id":5,"first_name":"Jo","last_name":"Sauvage","email":"jsauvage4@goo.gl"}]
    res.send(personData)
})
app.post('/post-test', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
    // insert
    // insert

});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})