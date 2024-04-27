var fs=require("fs")
var content='I know you are there hhhhhhhhh'
fs.writeFileSync("mynew1.txt",content,'utf-8')

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