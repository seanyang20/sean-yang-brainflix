const express = require("express");
const app = express();
const PORT = 8080;
const fs = require("fs");

app.use(express.json());

let videos = [];

const getVideoData = () => {
    console.log("getVideoData is working");
    fs.readFile("./data/videos.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      videos = JSON.parse(data);
    });
    console.log(videos);
  };

getVideoData();

console.log(videos);


app.get("/videos", (req, res) => {
console.log('GET method called');
res.json(videos);
console.log(res);
console.log(req);
})

app.listen(PORT, () => {
    console.log(`Express server is up and running on Port ${PORT}!`);
  });