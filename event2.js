const EventEmitter =  require('events');
const emitter  = new EventEmitter();
emitter.on('checkPage',()=>{
    console.log('Event Occur');
    
})
emitter.emit('checkPage')