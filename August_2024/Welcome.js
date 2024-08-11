var fun =require('./Hello');
function welcome(){

    console.log("welcome")
    fun.hello()
    var userInfo=fun.userInfo()
    console.log("userInfo",userInfo)
}
welcome()