//read content from one file 
//write the content on next file

var fs=require('fs')
fs.readFile('my.txt','utf8',readingFile)
function readingFile(error,data)
{
    if(error)
        {

            console.log(error)
        }
        else
            {
                console.log(data)
                //write content on byebye.txt
                fs.writeFile('mystory.txt',data,'utf8',writeFiles)
            }

}
function writeFiles(error)
{
    if(error)
        {
            console.log(error)
        }
        else
            {
                console.log('content writting done in a file')
            }
}