const express = require("express");
const app = express();
const PORT = 8080;
const fs = require("fs");
const cors = require('cors');
const morgan = require('morgan');
const path = require("path");
const videosJS = require("./routes/videos.js");
const axios = require('axios');

// Configuration
require('dotenv').config();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


app.use(express.static(path.join(__dirname, "public")));


app.use("/", videosJS);

app.listen(PORT, () => {
    console.log(`Express server is up and running on Port ${PORT}!`);
  });