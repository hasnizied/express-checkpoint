const express = require("express");
const { VerifyTime } = require("./middleware/verifyTime");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", VerifyTime, (req, res) => {
  return res.status(200).json({ msg: "ok" });
});

app.listen(8000);
