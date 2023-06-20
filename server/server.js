require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const path = require("path");
const routes = require("./routes/index")

const db = require("./config/connection");

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server + DB running 🔥`);
  });
});
