require("node:dns").setServers(["1.1.1.1"], ["3.3.3.3"]);
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbconnection = require("./config/dbconnection");
const authRoute = require("./routes/authRoute");
app.use(express.json());
app.use(cors());
dbconnection();

app.use("/api/v1/auth", authRoute);

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
