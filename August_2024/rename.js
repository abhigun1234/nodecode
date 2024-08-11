var fs =require('fs')
fs.rename('test.txt','test1.txt',renameFile)
function renameFile(error1)
{

    if(error1)
        {
            console.log('error',error1)
        }
        else
            {
                console.log('rename done')
            }

}