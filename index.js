const express = require("express");
const { dbConnection } = require("./configs/database"); 
dbConnection();
const dotenv = require("dotenv");
dotenv.config();


const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/", require("./routes"));

const APP_PORT = process.env.APP_PORT || 8080;


app.listen(APP_PORT, () => {
  console.log("server started", APP_PORT);
});
