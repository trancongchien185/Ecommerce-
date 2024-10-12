const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
mongoose
  .connect(
    "mongodb+srv://chien:123321@cluster0.1dexr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("db successfull"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use("/api/users", userRouter);
app.listen(5000, () => {
  console.log("run");
});
