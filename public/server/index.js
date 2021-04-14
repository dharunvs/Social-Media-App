const express = require("express");
const app = express();
const cors = require("cors");

const port = 3001;

app.use(cors());
app.use(express.json());

const userRoute = require("./routes/User");
app.use("/user", userRoute);

app.listen(port, (req, res) => {
  console.log("Server is running " + port);
});
