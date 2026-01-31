const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("Hello from the Dashboard!")
})

app.use("/hello",(req,res)=>{
    res.send("Hello from the Hello Hello!")
})

app.use("/test",(req,res)=>{
    res.send("Hello from the servers!")
})



app.listen(7777,()=>{
    console.log("Server is Sucessfully listening on port 7777")
})
