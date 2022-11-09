const express = require('express')
const server = express()

server.get('/api/main', (req,res)=>{
    res.send('hello bud')
})
server.listen(4000,()=>{
    console.log("app running");
    console.log("server is running");
})
