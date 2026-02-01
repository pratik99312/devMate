const express = require("express");

const app = express();

app.get("/user/:userID/:name/:password",(req,res)=>{
    console.log(req.params);
    res.send({firstName:"Pratik",lastName:"Agale"})
})



app.listen(7777, () => {
  console.log("Server is Sucessfully listening on port 7777");
});
