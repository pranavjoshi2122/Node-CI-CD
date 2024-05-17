const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mainRoute = require("./routes/main");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to test backend server" });
});

app.use("/api", mainRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
