const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const REACT_URL = require("../REACT_URL");
const bodyParser = require("body-parser");

const app = express();

const corsOptions = {
  origin: REACT_URL,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      var url = req.originalUrl;
      if (url.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// path to get images
app.get("/images/:id/:ext", async (req, res) => {
  let id = req.params.id;
  let ext = req.params.ext;
  let filePath = `../images/${id}.${ext}`;
  res.sendFile(path.join(__dirname, filePath));
});

module.exports = app;
