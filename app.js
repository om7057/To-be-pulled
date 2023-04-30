require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = 5000;
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");
const{default:mongoose}=require('mongoose')

app.use(express.json());
app.use("/blog", blogRoutes);
app.use("/user", userRoutes);

app.all("*", (req, res) => {
  console.log(req.body);
  res.send("oops!! you came to the wrong route");
});

const start = async (url) => {
  try {
    await mongoose
      .connect(url)
      .then(() => {
        console.log("Connected");
      })
      .catch((err) => {
        console.log(err);
      });
    app.listen(port, () => {
      console.log("App is listening at port 5000");
    });
  } catch(err) {   
    console.log(err);
  }
};
start(process.env.MONGODB_PASS);
