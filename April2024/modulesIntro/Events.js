const EventEmitter=require('events')

const emitter=new EventEmitter()
//raise event
emitter.on('messageLogged',function(){
    console.log("litener called")
})
// register listner
emitter.emit('messageLogged')
