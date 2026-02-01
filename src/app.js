const express = require("express");

const app = express();

//This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstName:'Pratik',lastName:"Agale"})
})

app.post("/user",(req,res)=>{
    // saving datab to DB
    res.send("Data Successfully saved to the database!")
})

app.delete("/user",(req,res)=>{
    // saving datab to DB
    res.send("Deleted Successfully!")
})

app.use("/hello", (req, res) => {
  res.send("Hello from the Hello Hello!");
});

//THIS will match all the HTTP method API calls to test
app.use("/test", (req, res) => {
  res.send("Hello from the servers!");
});

app.use("/", (req, res) => {
  res.send("Hello from the Dashboard!");
});

app.listen(7777, () => {
  console.log("Server is Sucessfully listening on port 7777");
});
