import React from "react";
import "./CurrentVideo.scss";
import PlayButton from "../../assets/icons/play.svg";
import FullScreen from "../../assets/icons/fullscren.svg";
import Volume from "../../assets/icons/volume_off.svg";

export default function CurrentVideo(props) {
    console.log(props);
    return (
        <div className="currentvideo">
            <video className="currentvideo__video" src={props.data.video} poster={props.data.image}></video>
            <div className="currentvideo__controls">
                <img className="currentvideo__playbutton" src={PlayButton} alt="Play Button"/>
                <div className="currentvideo__slider">
                    <div className="currentvideo__slider-bar"></div>
                    <p className="currentvideo__duration">0.00/{props.data.duration}</p>
                </div>
                <div className="currentvideo__right">
                    <img src={FullScreen} alt="Fullscreen icon" className="currentvideo__fullscreen" />
                    <img src={Volume} alt="Volume icon" className="currentvideo__volume" />
                </div>
            </div>
        </div>

    );
}

