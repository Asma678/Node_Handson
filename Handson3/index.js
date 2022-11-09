const express = require('express');
const app = express();

const middleware1 = (req,res,next)=>{
    console.log("middleware 1");
    next();
}

const middleware2 = (req,res,next)=>{
    console.log("middleware 2 for global");
    next();
}
app.use(middleware2);

app.get('/link1', middleware1,(req,res) =>{
    res.send(" <h1> link1 with middleware 1 nad 2 </h1>")
})

app.get('/link2',(req,res) =>{
    res.send( "<h1> link2 with middleware 2 </h1>")
})

app.get('/link3',(req,res) =>{
    res.send( "<h1> link3 with middleware 2 </h1>")
})

app.get('/link4', middleware1,(req,res)=>{
    res.send(" <h1> link4 with middleware 1 and 2 </h1> ")
})
app.listen(7000,() =>{
    console.log("server start");
})

