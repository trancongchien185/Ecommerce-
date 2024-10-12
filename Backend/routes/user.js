const router = require("express").Router();

router.get("/usertest", (req, res) => {
  // console.log("ssss");
  res.send("user test is successfull");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send("your username is:" + username);
});

router.get("/users", (req, res) => {});

module.exports = router;
