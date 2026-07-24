require("node:dns").setServers(["1.1.1.1"], ["3.3.3.3"]);
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbconnection = require("./config/dbconnection");
const authRoute = require("./routes/authRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const createLimiter = require("./utils/rateLimiter");

app.use(express.json());
app.use(cors());
dbconnection();

app.use(createLimiter({ limit: 50 }));

// Swagger Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/auth", createLimiter({ limit: 3 }), authRoute);

app.listen(5000, () => {
  console.log("Server is running 5000 port");
});
