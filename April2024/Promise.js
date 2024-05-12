// const  p =new Promise((resolve,reject)=>{


//     //async operation 
    
//     setTimeout(()=>{

//         resolve("hello")
//     },3000)
    

// })


// promise 

const p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{

        // resolve("hello")
        reject("error page not found ")
    },3000)
    
})

p1.then(res=>{
    console.log(res)
}).catch(error=>{
    console.log("error",error)
})