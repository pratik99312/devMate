const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.get("/getUserData", (req, res) => {
//   try {
    throw new Error("igjsidg");
    res.send("User Data Sent");
//   } catch (error) {
//     res.status(500).send("Some Error occured contact support team!");
//   }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.listen(7777, () => {
  console.log("Server is Sucessfully listening on port 7777");
});
