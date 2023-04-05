const express = require("express");
const app = express();
const route = require("./route/route")
const cors = require("cors")
app.use(cors({
    origin:"*"
}))
app.use(route)
app.listen(4045, ()=>{
    console.log("server is running");
})