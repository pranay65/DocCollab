const exp = require("express");
require("dotenv").config();
const cors = require("cors");
const app = exp();
app.use(exp.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Test");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
