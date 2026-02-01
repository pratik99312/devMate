const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.post("/user/login",(req,res)=>{
    res.send("User Logged in succesfully!")
})

app.get("/user", userAuth, (req, res) => {
  // Logic of checking if the request is authorised
  res.send("All Data Sent to user");
});



app.get("/admin/getAllData", (req, res) => {
  // Logic of checking if the request is authorised
  res.send("All Data Sent");
});

app.get("/admin/deleteUser", (req, res) => {
  // Logic of fetching all data
  res.send("User Deleted");
});

app.listen(7777, () => {
  console.log("Server is Sucessfully listening on port 7777");
});
