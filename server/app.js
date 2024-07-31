const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes/authRoutes");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

dotenv.config({ path: "./.env" });

const corsOptions = {
  origin: `${process.env.BASE_URL}`,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  "Access-Control-Allow-Credentials": true,
  credentials: true,
  optionsSuccessStatus: 204,
};

// middleware
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/oward", routes);

module.exports = app;
