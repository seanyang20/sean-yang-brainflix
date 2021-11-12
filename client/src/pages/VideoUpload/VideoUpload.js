import React, {Component} from "react";
import "./VideoUpload.scss";
// import SampleVideo from "../../assets/Video/brainstation-sample-video.mp4";
// import videouploadPoster from "../../assets/Images/videoupload-video-preview.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import uploadIcon from "../../assets/icons/publish.svg";
import axios from "axios";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";

export default class VideoUpload extends Component {
     state = {
        title: '',
        description: ''
   
      };

  handleChange = (event) => {
    console.log('handleChange!');
    console.log('handleChange!', event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // publish video functionality
  handleAlert = () => {
    // event.preventDefault();
    axios
    .post(`http://localhost:8080/videos`,{
        "title": this.state.title,
        "channel": "SYChannel",
        "image": thumbnail,
        "description": this.state.description,
        "duration": "4:01",
        "views": "0",
        "likes": "0",
        // "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": Date.now(),
        "comments": []
    })
    .then((response) => {
      console.log(response);
        setTimeout(()=> {
            alert("Uploaded Successfully!")
            // console.log(this.props);
            this.props.history.push('/')
        },1000)  
    })
    .catch(err => console.log(err))
  }


render (){
  console.log(this.handleAlert);
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
            name="title"
            className="videoupload__title"
            placeholder="Add a title to your video"
            onChange={this.handleChange}
          />
          <label htmlFor="videoupload__description" className="videoupload__label">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            type="text"
            name="description"
            className="videoupload__description"
            placeholder="Add a description of your video"
            onChange={this.handleChange}
          />
        </form>
        </section>
      <div className="videoupload__container-bottom">
        
        {/* <Link to='/'> */}
        <Button icon={uploadIcon} text="PUBLISH" handleAlert={this.handleAlert} />
        {/* </ Link> */}
       
        <h2 className="videoupload__cancel">
          <Link to="/">CANCEL</Link>
        </h2>
      </div>
      
    </main>
  );
}
}
