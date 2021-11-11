const express = require("express");
const router = express.Router();
const fs = require("fs");


let videoData = [];

const getVideoData = () => {
    console.log("getVideoData is working");
    fs.readFile("./data/videos.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
        
      }
      videoData = JSON.parse(data);
   
    });
  
  };

  
getVideoData();


router.get("/", (req, res) => {               
    console.log('GET method called');
    res.json(videoData);
 
    })

router.get("/:id", (req, res) => {
    console.log('GET videos/:id method called');
    const singleVideo = videoData.find((vid) => {
        return vid.id === req.params.id;
    })
    // console.log(singleVideo);
    if (singleVideo) {
        res.json(singleVideo);
    } else {
        res.status(404).send("We can't find that shoe.");
    }
    });

router.post("/", (req, res) => {
    console.log('POST videos/ method called');
    let videos = videoData;
    const {channel, description, id} = req.body;
    console.log(req.body);
    if (!channel || !description || !id) {
        res.status(400).send("Please supply channel and description properties in your POST request");
    }

    const newVideoObj = { id, channel, description };
    videos.push(newVideoObj);
    fs.writeFile('./data/videos.json', 
    JSON.stringify(videos), (err) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("File written successfully!");
        res.status(201).json(newVideoObj);
    })
}) 

module.exports = router;