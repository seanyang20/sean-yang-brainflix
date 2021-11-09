import React from "react";
import "./Sidebar.scss";
import NextVideo from '../NextVideo/NextVideo';

export default function Sidebar (props) {
        console.log(props);
    return (
        <div className="sidebar">
            <h2 className="sidebar__header">NEXT VIDEOS</h2>
            
            {props.data.filter((nextVideo) => (
          
                nextVideo.id !== props.shown.id
                    )
                )

            .map((nextVideo) => (
                <NextVideo
                key={nextVideo.id}
                id={nextVideo.id}
                title={nextVideo.title}
                channel={nextVideo.channel}
                image={nextVideo.image}
                video={nextVideo.video}
                />
                    )   
                )
            }
        </div>
        );
    }    


