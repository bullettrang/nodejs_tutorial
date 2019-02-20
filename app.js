const http = require('http');

//create a servecr
const server = http.createServer((req,res)=>{
    console.log(req);
})

//in production, we use port 80, but in local we use 3000 as such in this case
//this keeps listening for requests... loop and loop
server.listen(3000);