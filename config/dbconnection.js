const mongoose = require("mongoose");
const dbconnection = () => {
  return mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster1.gxwb1gq.mongodb.net/${process.env.MONGODB_DBNAME}?appName=Cluster1`,
    )
    .then(() => {
      console.log("Database Connected");
    })
    .catch((error) => {
      console.log(`Database require ${error}`);
    });
};

module.exports = dbconnection;
