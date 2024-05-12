function orderPiza(fun){
    console.log("order accepeted")
    fun()
}
//callback
function prparePiza(){
    console.log("piza prepared ")
}

orderPiza(prparePiza)
