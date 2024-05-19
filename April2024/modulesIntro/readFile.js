// import fs module
var fs=require('fs')

 fs.readFile('hello.txt','utf8',readMyFile)//async
 console.log("hello")
// console.log("hello")
function readMyFile(error,data){

      // console.log("data",data)
      // console.log("error",error)
      if(data){

            console.log("data",data)
      }
      else{
            console.log("file not found")
      }

}
