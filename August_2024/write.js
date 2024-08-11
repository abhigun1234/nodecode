var fs=require("fs")
var content='I know you are there and i can catch you'
//fs.writeFile("mynew.txt",content,'utf-8',writingFile)
var data=fs.writeFileSync("my.txt",content,'utf-8')
console.log("data",data)


// function writingFile(error1)
// {

//     if(error1)
//         {

//             console .log(error1)
//         }
//         else
//             {
//                 console.log('file Writting completed')
//             }

// }
// console.log('done')