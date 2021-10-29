import React, { Component } from "react";
import "./Sidebar.scss";
// import nextVideodata from '../../data/videos.json';
// import nextVideoDetails from '../../data/video-details.json';
import NextVideo from '../NextVideo/NextVideo';

export default function Sidebar (props) {
    console.log(props.data);


    return (
        <div className="sidebar">
            <h2 className="sidebar__header">NEXT VIDEOS</h2>
            {props.data.map((nextVideo) => (
                <NextVideo
                id={nextVideo.id}
                title={nextVideo.title}
                channel={nextVideo.channel}
                image={nextVideo.image}
                video={nextVideo.video}
                handleClick={props.handleClick}
                />
                    )   
                )
            }
        </div>
        );
    }    


