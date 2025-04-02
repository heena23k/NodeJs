const http = require('http');
// console.log(http);

const server = http.createServer((req,res)=>{
    console.log("started");
    res.end("Hello i am response");

})
server.listen(3000,()=>{
    console.log("Server running on port 3000");
    
})