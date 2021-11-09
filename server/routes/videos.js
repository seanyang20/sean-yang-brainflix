const express = require("express");
const router = express.Router();
const fs = require("fs");



let videos = [];

const getVideoData = () => {
    console.log("getVideoData is working");
    fs.readFile("./data/videos.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
        
      }
      videos = JSON.parse(data);
    //   console.log(videos);
    });
    // console.log(videos, data);
  };

  // console.log(getVideoData());
getVideoData();
console.log(videos);

router.get("/videos", (req, res) => {               
    console.log('GET method called');
    console.log(getVideoData());
    res.json(videos);
    // console.log(res);
    // console.log(req);
    })

router.get("/videos/:id", (req, res) => {
    console.log(req.params);
    })

module.exports = router;