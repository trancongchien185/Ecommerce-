const router = require("express").Router();
const User = require("../models/User");
router.get("/usertest", (req, res) => {
  res.send("user test is successfull");
});

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/ss", async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json("User has been deleted...");
    console.log("aaaaaa");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
