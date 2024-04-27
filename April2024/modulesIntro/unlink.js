var fs=require("fs")
fs.unlink("yourname.txt",fileUnlinkCompleted);
function fileUnlinkCompleted(error)
{
    if(error)
        {
            console.log(error)
        }
        else{
            console.log("file deleted")
        }

}