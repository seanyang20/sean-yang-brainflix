const express = require("express");
const router = express.Router();
const fs = require('fs')
const { v4: uuidv4 } = require("uuid");
// const videoJSON = require('../data/video-details.json')

// let videoData = videoJSON

let videoData = [];

const getVideoData = () => {
    console.log("getVideoData is working");
    fs.readFile("./data/videos.json", (err, data) => {
      if (err) {
        console.log(err);
        return;
        
      }
      videoData = JSON.parse(data);         // storing read JSON file in videoData
   
    });
  
  };

getVideoData();


router
    .post("/videos/:id/comments", (req, res) => {
        console.log('comments route /POST is working');
        const videoId = req.params.id
        // console.log(videoId);           // requested vid id
        const selectedVideo = videoData.find(
            (video) => 
            // console.log(video, "TESTING")
            video.id === videoId
            )
        // console.log(selectedVideo);         // returns the selected video data with the corresponding id 
   
        // console.log(req.body);
        newComment={
            "name": req.body.name,
            "comment": req.body.comment,
            "id": uuidv4(),
            "likes": 0,
            "timestamp": Date.now()
        }
        // console.log(newComment);
        // console.log(selectedVideo);
        selectedVideo.comments.push(newComment);
        console.log(selectedVideo);
        // find the video in the video array and reassign the data by including the selectedVideo and its new comment

        videoData.map((vidInArray) => {
            // console.log(vidInArray);
            if (vidInArray.id === selectedVideo.id){
                // console.log(vidInArray)
                return vidInArray = selectedVideo
            }
        })
        console.log(videoData);
        // overwrite the data file 

        // fs.writeFile(__dirname + '/../data/video-details.json', JSON.stringify(videoData, null, 2), (err) => {
        //     if (err){
        //         console.log(err)
        //     } else {
        //         res.status(200).send(newComment)
        //     }
        // })
        res.json(videoData);

        fs.writeFile('./data/videos.json', 
        JSON.stringify(videoData), (err) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("File written successfully!");
        res.status(201).json(videoData);
    })
        
    })

    .delete("/videos/:videoId/comments/:commentId", (req, res) => {
        console.log("comments Route /DELETE is working");
        const videoId = req.params.videoId;
        // console.log(videoId);
        const commentId = req.params.commentId;
        // console.log(commentId);
        const selectedVideo = videoData.find((video) => video.id === videoId);
        // console.log(selectedVideo);
        const selectedComment = selectedVideo.comments.find((comment) => comment.id === commentId);
        console.log(selectedComment);
        const commentIndex = selectedVideo.comments.indexOf(selectedComment);
        // console.log(commentIndex);
        selectedVideo.comments.splice(commentIndex,1)       // removes 1 item at index commentIndex
        // find the video in the video array and reassign the data by including the selectedVideo and its new comment
        videoData.map(vidInArray => {
            if (vidInArray.id === selectedVideo.id){
                return vidInArray = selectedVideo
            }
        })

        res.json(videoData);

        fs.writeFile('./data/videos.json', 
        JSON.stringify(videoData), (err) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("File written successfully!");
        res.status(201).json(videoData);
    })
//         fs.writeFile(__dirname + '/../data/video-details.json', JSON.stringify(videoData, null, 2), (err) => {
//             if (err){
//                 console.log(err)
//             } else {
//                 res.status(200).send(selectedComment)
//             }
//         })
    })

module.exports = router