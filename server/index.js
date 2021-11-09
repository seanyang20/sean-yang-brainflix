const express = require("express");
const app = express();
const PORT = 8080;
const fs = require("fs");
const cors = require('cors');
const morgan = require('morgan');
// const path = require("path");
const videosJS = require("./routes/videos.js");


app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

let videos = [];

const getVideoData = () => {
    console.log("getVideoData is working");
    fs.readFile("./data/videos.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      videos = JSON.parse(data);
      // console.log(videos);
    });
    // console.log(videos, data);
  };

// console.log(getVideoData());
getVideoData();
console.log(videos);


app.get("/videos", (req, res) => {               
console.log('GET method called');
console.log(getVideoData());
res.json(videos);
// console.log(res);
// console.log(req);
})

app.get("/videos/:id", (req, res) => {
  console.log(req.params);
})

app.listen(PORT, () => {
    console.log(`Express server is up and running on Port ${PORT}!`);
  });