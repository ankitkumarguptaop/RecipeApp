const express = require("express");
const { dbConnection } = require("./configs/database");
dbConnection();
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false })); // extended  true is for nested data
app.use(express.urlencoded({ extended: true })); //for file data
app.use("/uploads", express.static("uploads")); // for read static files

app.use("/", require("./routes"));

const APP_PORT = process.env.APP_PORT || 8080;

app.listen(APP_PORT, () => {
  console.log("server started", APP_PORT);
});
