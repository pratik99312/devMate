const express = require("express");

const app = express();

// app.use("/route",rH,[rH2,rH3],rH4)

app.use("/user", [
  (req, res, next) => {
    console.log("Handling the route user!!");
    next();
    // res.send("Response!!");
  },
  (req, res, next) => {
    console.log("Handling the route user 2!!");
    // res.send("2nd Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    res.send("3rd Response!!");
  },
  (req, res, next) => {
    console.log("Handling the route user 4!!");
    res.send("4th Response!!");
  },
]);

app.listen(7777, () => {
  console.log("Server is Sucessfully listening on port 7777");
});
