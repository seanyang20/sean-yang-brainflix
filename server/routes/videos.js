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
// console.log(videos);

router.get("/", (req, res) => {               
    console.log('GET method called');
    // console.log(getVideoData());
    res.json(videos);
    // console.log(res);
    // console.log(req);
    })

router.get("/:id", (req, res) => {
    // console.log(videos);
    const singleVideo = videos.find((vid) => {
        return vid.id === req.params.id;
    })
    console.log(singleVideo);
    if (singleVideo) {
        res.json(singleVideo);
    } else {
        res.status(404).send("We can't find that shoe.");
    }
    // const individualShoe = shoeData.find((shoe) => {
    //     return shoe.id === req.params.id;
    // });
    // if (individualShoe) {
    //     res.json(individualShoe);
    // } else {
    //     res.status(404).send("We can't find that shoe.");
    // }
    });

module.exports = router;