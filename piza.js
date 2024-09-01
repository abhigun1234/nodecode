var events=require('events')
var eventEmitter=new events.EventEmitter();


var orderPiza=function()
{
    console.log(" order accepted")
}
var pizaReady=function()
{

    console.log("piza ready") 
}
eventEmitter.on('order',orderPiza,'midum')
eventEmitter.on('ready',pizaReady)
eventEmitter.emit('order')
eventEmitter.emit('ready')