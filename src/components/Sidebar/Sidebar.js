import React, { Component } from "react";
import "./Sidebar.scss";
import nextVideodata from '../../data/videos.json';
import NextVideo from '../NextVideo/NextVideo';

class Sidebar extends Component {
    state = {
        nextVideo: nextVideodata,
    }
    
    render () {return (
        <div className="sidebar">
            <h2 className="sidebar__header">NEXT VIDEOS</h2>
            {this.state.nextVideo.map((nextVideo) => (
                <NextVideo
                key={nextVideo.id}
                title={nextVideo.title}
                channel={nextVideo.channel}
                image={nextVideo.image}
                />
                    )   
                )
            }
        </div>
        );
    }    
}

export default Sidebar;