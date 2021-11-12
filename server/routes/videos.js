const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


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


router.get("/videos", (req, res) => {               
    console.log('GET method called');
    res.json(videoData);
 
    })

router.get("/videos/:id", (req, res) => {
    console.log('GET videos/:id method called');
    const singleVideo = videoData.find((vid) => {
        return vid.id === req.params.id;
    })
    // console.log(singleVideo);
    if (singleVideo) {
        res.json(singleVideo);
    } else {
        res.status(404).send("We can't find that video.");
    }
    });

router.post("/videos", (req, res) => {
    console.log('POST videos/ method called');
    let videos = videoData;
    const {channel, description, title, views, likes, duration, image, timestamp, comments} = req.body;
    console.log(req.body);
   
  
	videos.push({
		id: uuidv4(),
		channel,
		description,
        title,
        views,
        likes,
        duration,
        image, 
        timestamp,
        comments
	});
    
    console.log(videos, "HELLO");
    if (!channel || !description) {
        res.status(400).send("Please supply channel and description properties in your POST request");
    }

    fs.writeFile('./data/videos.json', 
    JSON.stringify(videos), (err) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("File written successfully!");
        res.status(201).json(videos);
    })
}) 

router.put('/videos/:videoId/likes', (req, res) => {
    console.log("Inside ROUTER PUT");
    const videoId = req.params.videoId
    console.log(videoId);           // requested vid id
    const selectedVideo = videoData.find(
        (video) => 
        // console.log(video, "TESTING")
        video.id === videoId
        )
    // console.log(selectedVideo);         // returns the selected video data with the corresponding id 

    const {likes} = req.body;

    selectedVideo.push({
        likes
    });

    videoData.map((vidInArray) => {
        // console.log(vidInArray);
        if (vidInArray.id === selectedVideo.id){
            // console.log(vidInArray)
            return vidInArray = selectedVideo
        }
    })

    fs.writeFile('./data/videos.json', 
    JSON.stringify(videoData), (err) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("File written successfully!");
        res.status(201).json(videoData);
    })


})
// router.get('/', (req, res) => {
//     axios
//       .get(
//         `https://project-2-api.herokuapp.com/videos?api_key=${process.env.BRAINFLIX_API_KEY}`
//       )
//       .then((resp) => {
//         console.log(resp.data);
//         res.json(resp.data);
//       });
//   });
  

module.exports = router;