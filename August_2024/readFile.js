var fs=require('fs')
var data=fs.readFileSync('./test.txt','utf8')
// function callBack(error,data){
// if(data){
//     console.log("data",data)
// }
// else{
//     console.log("error",error)
// }
// }
console.log("data",data)
console.log(" read next line")