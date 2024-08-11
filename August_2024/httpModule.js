const http=require('http')
// const server=http.createServer()
// server.on('connect',(socket)=>{
//     console.log("new connection")
// })
// server.listen(3000)
// console.log('listining in the port 3000')
// //server.addListener()
 const server=http.createServer((req,res)=>{
        console.log("req",req.url)
        if(req.url==='/'){
            res.write('Hello World welcome')
            res.end()
        }
        if(req.url==='/hello'){
            res.write("hello india")
            res.end()
        }
        if(req.url==='/products'){

            res.write("product list")
            res.end()
        }
    }).listen(3000)