import React from "react";
import "./VideoUpload.scss";
// import SampleVideo from "../../assets/Video/brainstation-sample-video.mp4";
// import videouploadPoster from "../../assets/Images/videoupload-video-preview.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import uploadIcon from "../../assets/icons/publish.svg";


export default function VideoUpload() {

  let handleAlert = () => {
    alert("Upload Successful");
  }
 console.log(handleAlert);
  return (
    <main className="videoupload">  
      <h2 className="videoupload__header">Upload Video</h2>
      <section className="videoupload__container-top">
        <div className="videoupload__video-container">
          <label className="videoupload__label">
            VIDEO THUMBNAIL
          </label>
          <video className="videoupload__video"></video>
        </div>
        <form className="videoupload__form" name="form" method="post">
          <label className="videoupload__label" htmlFor="videoupload__form-title" >
            TITLE YOUR VIDEO
          </label>
          <input
            type="text"
            name="videoupload__title"
            className="videoupload__title"
            placeholder="Add a title to your video"
          />
          <label htmlFor="videoupload__description" className="videoupload__label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            type="text"
            name="videoupload__description"
            className="videoupload__description"
            placeholder="Add a description of your video"
          />
        </form>
        </section>
      <div className="videoupload__container-bottom">
        
        <Link to='/'>
        <Button icon={uploadIcon} text="PUBLISH" handleAlert={handleAlert} />
        </ Link>
       
        <h2 className="videoupload__cancel">
          <Link to="/">CANCEL</Link>
        </h2>
      </div>
      
    </main>
  );
}
