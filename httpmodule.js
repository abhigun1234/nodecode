//
var http =require('http');
http.createServer(function(request,response){
    console.log("running on the port 8080")
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("bye")
    response.end()
}).listen(8080);
// http.get()''